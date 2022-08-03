import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BurgerPanier } from 'src/app/produits/shared/models/burger-panier';
import { MenuPanier } from 'src/app/produits/shared/models/menu-panier';
import { Produit } from 'src/app/produits/shared/models/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }

  menus: MenuPanier[] = []
  burgers: BurgerPanier[] = []
  nombre:number=0
  prixTotal:number=0
  sharePrixTotal = new Subject<number>()

  shareNombre = new Subject<number>()
  // simpleObservable$ = this.simpleObservable.asObservable();

  addProduitMenu(menu:MenuPanier){
    this.nombre+=1;
    this.shareNombre.next(this.nombre)
    this.menus.push(menu)
    window.alert("Menu ajouté au panier avec succés")
  }

  addProduitBurger(burger:BurgerPanier){
    this.nombre+=1;
    this.shareNombre.next(this.nombre)
    this.burgers.push(burger)
    window.alert("Burger ajouté au panier avec succés")
    this.prixTotal +=  this.totalProduit()
    // alert(this.prixTotal)
    this.sharePrixTotal.next(this.prixTotal)
  }

  removeProduit(id:number){
      let total: number =0
      this.burgers.map((burger,index)=>{
          if(burger.burger?.id == id){
              total = burger.quantite * burger.burger.prix
              this.burgers.splice(index,1)
          }
      })
      return total;
  }

  totalProduit(){
    let total:number=0
    if(this.burgers.length > 0){
        this.burgers.map(
            (data)=>{
              total += (data.burger?.prix * data.quantite)
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

  getNombre(){
      return this.menus.length + this.burgers.length
  }

  // addCount() {
  //   this.nombre+=1;
  //   this.simpleObservable.next(this.nombre)
  // }
  // removeCount() {
  //   if (this.nombre > 0) { this.nombre-=1 };
  //   this.simpleObservable.next(this.nombre)
  // }
  getCount(){
    return this.shareNombre;
  }
}
