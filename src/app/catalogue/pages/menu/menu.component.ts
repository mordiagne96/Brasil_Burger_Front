import { Component, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';
import { CatalogueService } from '../../shared/service/catalogue.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:CatalogueService) { }
  show_btn_Add_burger = false;
  show_btn_Add_menu = true;
  produits:Produit[]=[];
  ngOnInit(): void {
    
    this.service.all().subscribe(data=>{
      this.produits = data[1].menu;
      this.produits.map(
        produit=>{
          produit.imageReelle = "data:image/png;base64,"+produit.image
        }
      )
  });


  }

}
