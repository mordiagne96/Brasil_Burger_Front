import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PanierService } from 'src/app/shared/services/panier.service';
import { BoissonCheck } from '../../shared/models/boisson-check';
import { BoissonQuantite } from '../../shared/models/boisson-quantite';
import { DetailMenu } from '../../shared/models/detail-menu';
import { MenuDetail } from '../../shared/models/menu-detail';
import { MenuPanier } from '../../shared/models/menu-panier';
import { Taille } from '../../shared/models/taille';
import { TailleBoisson } from '../../shared/models/taille-boisson';
import { TailleBoissonCheck } from '../../shared/models/taille-boisson-check';
import { CatalogueService } from '../../shared/service/catalogue.service';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

  constructor(private router: Router, private service:CatalogueService, private servicePanier:PanierService) { }

  menu: DetailMenu|null =null
  href: string="";
  // show_btn_Add_burger = false;
  // show_btn_Add_menu = true;
  erreur=false;
  btnActive=true;
  messageErreur: string = "";
  array:any=[];
  btnAddActive = true;
  nombre:number=0

  // tailleBoissonsCheck:TailleBoissonCheck[]|null=null

  taille:Taille|null=null
  tailleBoissons:TailleBoisson[]=[]
  tailleBoissonsCopie:TailleBoisson[]=[]
  tailleId: number|null=null;
  choixBoissons: BoissonCheck|null=null
  id:number=0;
  tailleBoissonCheck:TailleBoissonCheck[]=[]

  // menu : Observable<DetailMenu>|null=null;
  detailMenu : Observable<MenuDetail>|null=null;
  @ViewChild('quantiteMenu') quantiteMenu:ElementRef|null=null;



  ngOnInit(): void {
    window.scroll(0,0);
    this.href = this.router.url;
    this.array = this.href.split("/");
    this.id = this.array[this.array.length - 1]
    this.servicePanier.nombreObservable.subscribe(data=>this.nombre=data)
    this.detailMenu = this.service.getById(this.id)
  }

  getBoissonBy(taille:any){
    this.taille=taille
    this.tailleId=taille.id
    this.tailleBoissonsCopie=taille.tailleBoissons
    this.tailleBoissons = this.tailleBoissonsCopie.filter(
      (data)=>{
          return data.stock === 1;
      }
    )

    let tailBoisCheck: TailleBoissonCheck={
        idTaille:this.tailleId,
        quantite:0,
        boissonQuantites:[]
    }

    if(this.tailleBoissonCheck?.length == 0){
        this.tailleBoissonCheck.push(tailBoisCheck)
    }else{
      let trouve:boolean=false
      this.tailleBoissonCheck?.forEach(element => {
          if(element.idTaille == this.tailleId){
              trouve=true
              this.tailleBoissons.map(
                  tb=>{
                    tb.check=false
                      if(element.boissonQuantites?.length != 0){
                          element.boissonQuantites?.map(
                              bois=>{
                                  if(bois.boissonId == tb.boisson.id){
                                      tb.check=true
                                      tb.qteCheck=bois.quantite
                                  }
                              }
                          )
                      }
                  }
              )
          }
      });
      if(!trouve){
        this.tailleBoissonCheck?.push(tailBoisCheck)
      }

    }
    
    // alert(this.tailleBoissonCheck?.length)
    // console.log(this.tailleBoissons)
  }



  choixBoisson(choix:BoissonCheck){
      // alert('ok')
      this.erreur = false
      // console.log(choix)
      // console.log(this.tailleBoissons)
      this.detailMenu?.subscribe(
          data=>{
              this.menu = data.menu;
              data.menu.tailleMenus.map(  
                  tailleMenu=>{
                      if(tailleMenu.taille.id == choix.tailleId){
                          if(tailleMenu.quantite < choix.quantite){
                              this.messageErreur="Vous avez dépacer la quantite definie pour cette taille"
                              this.erreur = true
                          }else{
                              this.tailleBoissons.map(
                                tailleBoisson=>{
                                    if(choix.boissonId == tailleBoisson.boisson.id){
                                      if(tailleBoisson.quantite < choix.quantite){
                                          // alert("stock Indisponible")
                                          this.messageErreur="Stock Insuffisante!!!"
                                          this.erreur = true
                                          // this.tailleBoissonCheck?.push()
                                      }else{
                                          let boisQte:BoissonQuantite={
                                              boissonId:choix.boissonId,
                                              quantite:choix.quantite
                                          }
                                          this.tailleBoissonCheck.map(
                                              tbCheck => {
                                                 if(tbCheck.idTaille == choix.tailleId){
                                                    let trouve:boolean=false;
                                                    let qte:number = 0
                                                    tbCheck.boissonQuantites?.forEach(
                                                        elt=>{
                                                          if(elt.boissonId==choix.boissonId){
                                                              let qteplus:number = choix.quantite - elt.quantite
                                                              if(tailleMenu.quantite >= (tbCheck.quantite + qteplus)){
                                                                   elt.quantite=choix.quantite
                                                                  //  let qteTotalTb = 0;
                                                              }else{
                                                                // alert("Vous avez dépacer la quantite definie pour cette taille!!!")
                                                                this.messageErreur="Vous avez dépacer la quantite definie pour cette taille!!!"
                                                                this.erreur = true;
                                                                this.btnAddActive = true
                                                              }
                                                              trouve=true
                                                              
                                                          }
                                                          qte += elt.quantite
                                                        }
                                                    )

                                                    if(!trouve){
                                                      if(tailleMenu.quantite >= (tbCheck.quantite+choix.quantite)){
                                                        tbCheck.boissonQuantites?.push(boisQte)
                                                        qte+=choix.quantite
                                                      }else{
                                                        // alert("Vous avez dépacer la quantite definie pour cette taille!!!")
                                                        this.messageErreur="Vous avez dépacer la quantite definie pour cette taille!!!"
                                                        this.erreur = true;
                                                        this.btnAddActive = true
                                                        
                                                      }
                                                    }
                                                    tbCheck.quantite = qte; 
                                                 }
                                              }
                                          )
                                      }
                                    } 
                                }
                              )
                          }
                      }
                      if(!this.erreur){
                          if(data.menu.tailleMenus.length != this.tailleBoissonCheck.length){
                            this.btnAddActive = true
                          }else{
                              this.tailleBoissonCheck.map(
                                tbCheck=>{
                                    if(tbCheck.idTaille == tailleMenu.taille.id){
                                        if(tbCheck.quantite != tailleMenu.quantite){
                                          this.btnAddActive = true
                                        }else{
                                            this.btnAddActive = false;
                                        }
                                    }
                                }
                              )
                          }
                      }else{
                        this.btnAddActive = true;
                      }
                      
                  }
              )
          }
      )
      
      // console.log(this.tailleBoissonCheck)
  }

  UnChoixBoisson(unChoix:BoissonCheck){

      this.tailleBoissonCheck.map(
          tbCheck=>{
              if(tbCheck.idTaille == unChoix.tailleId){
                  tbCheck.boissonQuantites?.map(
                      (tbQ,index)=>{
                          if(tbQ.boissonId == unChoix.boissonId){
                              tbCheck.quantite = tbCheck.quantite - tbQ.quantite
                              tbCheck.boissonQuantites?.splice(index,1)
                              this.btnAddActive = true;
                          }
                      }
                  )
              }
          }
      )
      // console.log(this.tailleBoissonCheck)
  }

  addProduit(event:any){
    console.log(this.menu)
    console.log(this.tailleBoissonCheck)

    let menu: MenuPanier = {
        menu:this.menu,
        tailleBoissonCheck:this.tailleBoissonCheck,
        quantite:this.quantiteMenu?.nativeElement.value
    }
    this.servicePanier.addProduitMenu(menu)
  }
  
}
