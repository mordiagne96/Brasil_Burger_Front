import { SecuriteService } from 'src/app/shared/services/securite.service';
import { PanierService } from 'src/app/shared/services/panier.service';
import { MenuService } from './../../../shared/services/menu.service';
import { Produit } from './../../shared/models/produit';
import { CatalogueService } from './../../shared/service/catalogue.service';
import { Component, OnInit } from '@angular/core';
import { Catalogue } from '../../shared/models/catalogue';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  constructor(private service:CatalogueService,private securiteService:SecuriteService, private menuService:MenuService) { }
  data:Catalogue|null = null
  step:any = 1
  token:string|null=""
  option:string='liste'
  menus:Produit[]=[]

  ngOnInit(): void {
      this.service.all().subscribe(
        data=>{
          this.data = data
          this.menus = data.menus
        }
      )
  }

  selectBurger(produit:Produit){
  }

  suivant(step:any){
    this.step++
    // alert(step)
  }

  precedent(step:any){
    this.step--
  }

  validerMenu(){
    // alert("valider")
    // console.log(this.menuService.menu)
    this.token = this.securiteService.getToken();
    this.menuService.addMenu(this.token as string).subscribe(
      (data) => {
      },
      (error) => {
        if(Number(error.status) == 400){
          Swal.fire('Menu Validé!', 'Menu Ajouté avec succés', 'success');
          window.location.reload();
              // this.menus=[];
              // this.burgers=[];
              // this.portions=[];
              // this.tailleBoissons=[];
              // this.servicePanier.clearPanier()
              // this.isExist = false
              // console.log("ajout avec success")
        }else{
          // this.notifier.notify("error", "Une erreur est survenue lors de l'ajout de commande")
          console.log("Erreur sur l'ajout")
        }
      }
    )
    // console.log(this.token);
    // console.log(this.menuService.menu)

  
  }
  getNomMenu(nom:string){
    // console.log(nom)
    this.menuService.menu.nom = nom
    // console.log(this.menuService.menu)
  }

  getImage(event:any){

    // console.log(event.target.files)
    // console.log(image)
    this.menuService.menu.file = event.target.files[0]
  }

  nouveauMenu(){
    // alert("ok")
    this.option = "nouveau"
  }

  listeMenu(){
    this.option = "liste"
  }
}
