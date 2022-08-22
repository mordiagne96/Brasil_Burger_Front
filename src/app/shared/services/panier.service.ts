import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BurgerPanier } from 'src/app/produits/shared/models/burger-panier';
import { Commande } from 'src/app/produits/shared/models/commande';
import { MenuCommande } from 'src/app/produits/shared/models/menu-commande';
import { MenuCommandeTailleBoisson } from 'src/app/produits/shared/models/menu-commande-taille-boisson';
import { MenuPanier } from 'src/app/produits/shared/models/menu-panier';
import { PortionFrite } from 'src/app/produits/shared/models/portion-frite';
import { PortionFriteCommande } from 'src/app/produits/shared/models/portion-frite-commande';
import { TailleBoisson } from 'src/app/produits/shared/models/taille-boisson';
import { TailleBoissonCommande } from 'src/app/produits/shared/models/taille-boisson-commande';
import { ZoneDto } from 'src/app/produits/shared/models/zone-dto';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {


  private url_back:string = "http://localhost:8000/";

  constructor(private http:HttpClient, private notifier: NotifierService) { }

  menus: MenuPanier[] = []
  burgers: BurgerPanier[] = []
  tailleBoissonCommande:TailleBoissonCommande[]=[]
  portionCommande: PortionFriteCommande[]=[]
  nombre:number=0
  prixTotal:number=0
  nombreSubject = new BehaviorSubject(this.nombre);
  nombreObservable = this.nombreSubject.asObservable();
  tot = new BehaviorSubject(this.prixTotal);
  total = this.tot.asObservable();
  commande:Commande|null = null
  token:string |null = null
  
  getAllZone():Observable<ZoneDto> {
    return this.http.get<ZoneDto>(`${this.url_back}api/zone_dtos/1`);
  }

  addCommande(commande:Commande, token:string|null): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.post<Commande>(this.url_back + 'api/addCommande', JSON.stringify(commande), httpOptions)
  }

  annulerCommande(id:number){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      })
    }
    return this.http.put<Commande>(this.url_back + `updateEtat/${id}/annuler`, JSON.stringify(""), httpOptions)
  }

  addProduitMenu(menu:MenuPanier){
    if(!this.isExisteMenu(menu)){
      this.menus.push(menu)
      this.nombre+=1;
    }
    this.nombreSubject.next(this.nombre)
    this.prixTotal =  this.totalProduit()
    this.tot.next(this.prixTotal)
    this.getMenuCommande(menu)
    this.notifier.notify("success", "Menu ajouté avec succés!!")

  }

  addProduitBurger(burger:BurgerPanier){
    if(!this.isExiste(burger)){
        this.burgers.push(burger)
        this.nombre+=1;
    }
    this.prixTotal =  this.totalProduit()
    this.tot.next(this.prixTotal)
    this.nombreSubject.next(this.nombre)
    this.notifier.notify("success", "Burger ajouté avec succés!!")
    
  }

  removeProduit(id:number){
      let total: number =0
      this.nombre--

      if(this.burgers.length > 0){
        this.burgers.map((burger,index)=>{
          if(burger.burger?.id == id){
              total = burger.quantite * Number(burger.burger.prix) as number
              this.burgers.splice(index,1)
          }
        })
      }

      if(this.menus.length > 0){
        this.menus.map(
          (menu,index)=>{
            if(menu.menu?.id == id){
                total = menu.quantite * menu.menu.prix
                this.menus.splice(index,1) 
            }
          }
        )
      }

      this.nombreSubject.next(this.nombre)
      this.prixTotal = this.totalProduit()
      this.tot.next(this.prixTotal)
      return total;
  }

  isExiste(burger:BurgerPanier){
    let existe:boolean = false;
    this.burgers.map(
        data=>{
            if(data.burger.id == burger.burger.id){
                let somm = Number(data.quantite)+Number(burger.quantite)
                data.quantite = somm
                existe = true
            }
        }
    )
    return existe
  }

  isExisteMenu(menu:MenuPanier){
    let existe:boolean = false;
    this.menus.map(
        data=>{
            if(data.menu?.id == menu.menu?.id){
                let somm = Number(data.quantite)+Number(menu.quantite)
                data.quantite = somm
                existe = true
            }
        }
    )
    return existe
  }

  totalProduit(){
    let total:number=0
    if(this.burgers.length > 0){
        this.burgers.map(
            (data)=>{
              total += (Number(data.burger?.prix) * data.quantite)
            }
        )
    }
    if(this.menus.length > 0){
        this.menus.map(
          (data)=>{
              let menu:any = data.menu
              total += menu.prix * data.quantite
          }
        )
    }
    return total
  }

  getBurgers(){
    return this.burgers
  }

  getMenus(){
    return this.menus
  }

  getMenuCommande(menuPanier:MenuPanier){
      let menuCommande:MenuCommande={
        quantite:menuPanier.quantite,
        menu:menuPanier.menu,
        tailleBoissons:[]
      } 

      menuPanier.tailleBoissonCheck.map(
          data =>{
            let tbs:TailleBoisson[]|undefined=[]
            
            menuPanier.menu?.tailleMenus.forEach(element => {
              if(element.taille?.id == data.idTaille){
                
                data.boissonQuantites?.map(
                  bois=>{
                    let tailleBoisson:MenuCommandeTailleBoisson={
                      taille:null,
                      quantite:0,
                      boisson:null
                    }
                    tailleBoisson.taille = element.taille

                    tbs = element.taille?.tailleBoissons
                      tbs?.map(tb=>{
                          if(tb.boisson.id == bois.boissonId){
                            tailleBoisson.boisson = tb.boisson
                            tailleBoisson.quantite = bois.quantite
                          }
                      })
                      menuCommande.tailleBoissons.push(tailleBoisson)
                    // console.log(tailleBoisson)
                  }
              )
              }
            });
            
          }
      )
      console.log(menuCommande);
  }

  addTailleBoissonCommande(tailleBoisson:TailleBoissonCommande){
      this.tailleBoissonCommande.push(tailleBoisson)
      this.nombre+=1;
      this.nombreSubject.next(this.nombre)
      this.notifier.notify("success", "Boisson ajouté avec succés!!")

      // console.log(this.tailleBoissonCommande)
  }

  addPortionCommande(portion:PortionFriteCommande){
    this.portionCommande.push(portion)
    this.nombre+=1;
    this.nombreSubject.next(this.nombre)
    this.notifier.notify("success", "Portion ajouté avec succés!!")

  }

  removeTailleBoissCommande(tailleBoisson:TailleBoissonCommande){
    this.tailleBoissonCommande.map((data,index)=>{
        if(data.tailleBoisson?.id == tailleBoisson.tailleBoisson?.id){
          this.tailleBoissonCommande.splice(index,1)
          this.nombre--;
          this.nombreSubject.next(this.nombre)
        }
    })

    // console.log(this.tailleBoissonCommande)
  }

  removePortionCommande(portion:PortionFriteCommande){
    this.portionCommande.map((data,index)=>{
        if(data.portionFrite?.id == portion.portionFrite?.id){
          this.portionCommande.splice(index,1)
          this.nombre--;
          this.nombreSubject.next(this.nombre)
        }
    })

    console.log(this.portionCommande)
  }

  getTailleBoissonsCommande(){
    return this.tailleBoissonCommande
  }

  getPortionsCommande(){
    return this.portionCommande
  }

  clearPanier(){
    this.menus = []
    this.burgers = []
    this.tailleBoissonCommande=[]
    this.portionCommande=[]
    this.nombre=0
    this.prixTotal=0

    this.nombreSubject.next(this.nombre)
    this.tot.next(this.prixTotal)
  }

}
