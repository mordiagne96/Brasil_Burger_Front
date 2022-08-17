import { BurgerMenu } from './../../shared/models/burger-menu';
import { MenuService } from './../../../shared/services/menu.service';
import { Produit } from './../../shared/models/produit';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produit-menu',
  templateUrl: './card-produit-menu.component.html',
  styleUrls: ['./card-produit-menu.component.css']
})
export class CardProduitMenuComponent implements OnInit {

  @Input() data:any;
  @Input() type:string="burger";

  burgerMenu:BurgerMenu={
    id:null,
    quantite:0,
    prix:0,
    burger:null
  }
  frite:Produit|null=null

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
  }

  checkProduit(event:any, value:Produit, quantite:string){
    // console.log(value)
    if(event.target.checked){
        if(this.type == "frite"){
            this.frite = value
            this.menuService.addPortion(this.frite)
        }else{
            this.burgerMenu.burger = value
            this.burgerMenu.quantite = Number(quantite)
            // console.log(this.burgerMenu)
            this.menuService.addBurger(this.burgerMenu)
        }
        // console.log(this.menuService.menu)
    }else{
      if(this.type == "burger"){
        this.menuService.removeBurger(this.burgerMenu)
      }
    }
    // console.log(value)
  }

  changeValue(event:any){
    // if(this.type=="frite"){
    //   this.frite = 
    // }
  }
}
