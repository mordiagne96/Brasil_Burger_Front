import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PanierService } from 'src/app/shared/services/panier.service';
import { SecuriteService } from 'src/app/shared/services/securite.service';
import { Catalogue } from '../../shared/models/catalogue';
import { User } from '../../shared/models/user';
import { Produit } from '../../shared/models/produit';
import { TailleBoisson } from '../../shared/models/taille-boisson';
import { Taille } from '../../shared/models/taille';
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
  nbre:number=0;

  constructor(private service:CatalogueService, private servicePanier:PanierService,private serviceSecurite:SecuriteService) {}
  visible = false;
  showComplement=false;
  showCatalogue=true;
  user: User|null = null

  
  show_btn_Add_burger = true;
  show_btn_Add_menu = false;
  produits:Produit[]|undefined=[];
  produit : Produit | null = null;
  typeCatalogue: string = "burgers";
  catalogue:Catalogue|null=null;
  portions:Produit[]|undefined =[]
  tailleBoissons:TailleBoisson[]=[]
  tailles:Taille[]=[]

  ngOnInit(): void {
    this.servicePanier.nombreObservable.subscribe(data=>this.nbre=data)

    this.show_btn_Add_burger = true;
    this.show_btn_Add_menu = false;
    // this.catalogues$ = this.service.all();
    this.user = this.serviceSecurite.getUser()
    // console.log(this.catalogues$)
    
    // this.tailles.

    this.service.all().subscribe(data=>{
        this.catalogue = data
        console.log(data)
        this.produits = data.burgers;
        this.portions = data.frites;
        this.tailles = data.tailles;

        this.produits.map(
          produit=>{
            if(produit.image == null){
                produit.imageReelle=this.cheminLogo
            }else{
                produit.imageReelle = this.base64+produit.image
            }
          }
        )

        this.produits = this.produits?.filter(
          data=>data.prix != null
        ) 
    });

  }

  showDetail(id:number) {
      this.produits?.map(
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
          this.produits = this.catalogue?.menus
          this.produits?.map(
                produit=>{
                  if(produit.image == null){
                      produit.imageReelle="../../../../assets/images/logo.png"
                  }else{
                      produit.imageReelle = "data:image/png;base64,"+produit.image
                  }
                }
          )

          this.produits = this.produits?.filter(
            data=>data.prix != null
          )

          this.show_btn_Add_burger = false;
          this.show_btn_Add_menu = true;
          this.showComplement=false;
          this.showCatalogue=true;
        break;
        
        case "burgers":
          this.produits = this.catalogue?.burgers
          this.produits?.map(
            produit=>{
              if(produit.image == null){
                  produit.imageReelle="../../../../assets/images/logo.png"
              }else{
                  produit.imageReelle = "data:image/png;base64,"+produit.image
              }
            }
          )     
        
          this.show_btn_Add_burger = true;
          this.show_btn_Add_menu = false;
          this.showComplement=false;
          this.showCatalogue=true;
          break;


        case "complement":
          this.portions = this.catalogue?.frites
               
          this.showComplement=true;
          this.showCatalogue=false;
          break;
      }
  }
}
