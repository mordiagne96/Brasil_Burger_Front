import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PanierService } from 'src/app/shared/services/panier.service';
import { Catalogue } from '../../shared/models/catalogue';
import { Produit } from '../../shared/models/produit';
import { CatalogueService } from '../../shared/service/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  catalogues$ : Observable<Catalogue> | null = null;
  cat:Catalogue|null = null
  cheminLogo:string="../../../../assets/images/logo.png";
  base64 = "data:image/png;base64,";
  nbre:number=0

  constructor(private service:CatalogueService, private servicePanier:PanierService) {}
  // nombre:number=0
  visible = false;
  // @Input idBurger
  
  show_btn_Add_burger = true;
  show_btn_Add_menu = false;
  produits:Produit[]=[];
  // @Input() item = ''; 
  produit : Produit | null = null;
  typeCatalogue: string = "burgers";

  ngOnInit(): void {
    this.servicePanier.shareNombre.subscribe(
      data=>{
        this.nbre = data
        // alert(this.nbre)
      }
    )

    this.show_btn_Add_burger = true;
    this.show_btn_Add_menu = false;
    this.catalogues$ = this.service.all();

    this.service.all().subscribe(data=>{
        this.produits = data.burgers;
        this.produits.map(
          produit=>{
            if(produit.image == null){
                produit.imageReelle=this.cheminLogo
            }else{
                produit.imageReelle = this.base64+produit.image
            }
          }
        )
    });

//   this.service.all().subscribe(data=>{
//     this.produits = data[0].burgers;
//     this.produits.map(
//       produit=>{
//         produit.imageReelle = "data:image/png;base64,"+produit.image
//       }
//     )
// });

  }

  showDetail(id:number) {
      this.produits.map(
          prod=>{
              if(prod.id == id){
                  if(prod.image == null){
                    prod.imageReelle = this.cheminLogo
                  }
                  this.produit = prod;
              }
          }
      )
      this.visible = true;
  }

  closeDetail() {
      this.visible = false;
  }

  fitreCatalogue(type:string)
  {
      switch(type){
        case "menus":
          this.catalogues$?.subscribe(data=>{
            this.produits = data.menus;
            this.produits.map(
              produit=>{
                if(produit.image == null){
                    produit.imageReelle="../../../../assets/images/logo.png"
                }else{
                    produit.imageReelle = "data:image/png;base64,"+produit.image
                }
              }
            )
        });
        this.show_btn_Add_burger = false;
        this.show_btn_Add_menu = true;
        break;
        case "burgers":
          this.catalogues$?.subscribe(data=>{
            this.produits = data.burgers;
            this.produits.map(
              produit=>{
                if(produit.image == null){
                    produit.imageReelle="../../../../assets/images/logo.png"
                }else{
                    produit.imageReelle = "data:image/png;base64,"+produit.image
                }
              }
            )
        });
        this.show_btn_Add_burger = true;
        this.show_btn_Add_menu = false;
          break;
      }
  }
}
