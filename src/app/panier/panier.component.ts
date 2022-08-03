import { Component, Input, OnInit } from '@angular/core';
import { BurgerPanier } from '../produits/shared/models/burger-panier';
import { MenuPanier } from '../produits/shared/models/menu-panier';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  menus:MenuPanier[]=[];
  burgers:BurgerPanier[]=[];
  prixTotale:number=2
  
  constructor(private servicePanier: PanierService) {
        
      // this.nbre = nbre
   }

  ngOnInit(): void {
      this.menus = this.servicePanier.getMenus()
      this.burgers = this.servicePanier.getBurgers()
      // this.prixTotal = this.servicePanier.totalProduit()
      // console.log(burgers)
      // console.log(menus)
      // alert("ok")
      // let prixT:number = 0
      let prix=0
      this.servicePanier.sharePrixTotal.subscribe(
        data=>{
            this.prixTotale = data
            prix = this.prixTotale
            console.log(this.prixTotale)
        }
      )
      // alert(prix)
  }

}
