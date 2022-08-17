import { Component, Input, OnInit } from '@angular/core';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import { Observable } from 'rxjs';
import { BurgerPanier } from '../produits/shared/models/burger-panier';
import { MenuPanier } from '../produits/shared/models/menu-panier';
import { PortionFrite } from '../produits/shared/models/portion-frite';
import { PortionFriteCommande } from '../produits/shared/models/portion-frite-commande';
import { TailleBoisson } from '../produits/shared/models/taille-boisson';
import { TailleBoissonCommande } from '../produits/shared/models/taille-boisson-commande';
import { Zone } from '../produits/shared/models/zone';
import { Commande } from '../produits/shared/models/commande';
import { MenuCommande } from '../produits/shared/models/menu-commande';
import { MenuCommandeTailleBoisson } from '../produits/shared/models/menu-commande-taille-boisson';
import { PanierService } from '../shared/services/panier.service';
import { SecuriteService } from '../shared/services/securite.service';
import { map } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';
import Swal from 'sweetalert2';
import {Router} from "@angular/router"


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  addCommande: Observable<any>|null= null
  menus:MenuPanier[]=[];
  burgers:BurgerPanier[]=[];
  portions:PortionFriteCommande[]=[];
  tailleBoissons:TailleBoissonCommande[]=[];
  menuCommandes:MenuCommande[]=[]
  prixTotale:number=2
  nbre:number=0
  isExist:boolean=true
  zones: Zone[] |null = []
  typeLivraison: Number = 2;
  zoneId:number=0;
  token:string|null=null

  private readonly notifier: NotifierService;

  constructor(private router: Router,private servicePanier: PanierService, private securiteService: SecuriteService,notifierService: NotifierService,private ngxBootstrapConfirmService:NgxBootstrapConfirmService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
      this.menus = this.servicePanier.getMenus()
      this.burgers = this.servicePanier.getBurgers()

      this.servicePanier.nombreObservable.subscribe(data=>this.nbre=data)
      this.servicePanier.total.subscribe(prix=>this.prixTotale = prix)
      if(this.menus.length == 0 && this.burgers.length == 0){
        this.isExist = false
      }

      // this.zones$ = this.servicePanier.getAllZone();
      this.servicePanier.getAllZone().subscribe(
        data=>{
            this.zones = data.zones
            // console.log(this.zones[0].quartiers[0].libelle)
        }
      )
      
  }

  getTypeLivraison(event:any){
      // alert(event.target.value)
      this.typeLivraison = Number(event.target.value)
  }

  valideCommande(telephone:string, email:string, zoneS:string){
    // alert(this.typeLivraison)
    // Swal.fire('Hey there!');
    // Swal.fire('Hi', 'We have been informed!', 'success');
    Swal.fire({
      title: 'Vous etes vraiment sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OUI, je valide.',
      cancelButtonText: "Non, j'annule",
    }).then((result) => {
      if (result.value) {
        if(this.typeLivraison == 2){
          this.menus = this.servicePanier.getMenus()
          this.burgers = this.servicePanier.getBurgers()
          this.portions = this.servicePanier.getPortionsCommande()
          this.tailleBoissons = this.servicePanier.getTailleBoissonsCommande()
          this.zoneId = Number(zoneS)
          let zone:Zone|null =  null

          this.zones?.forEach(data => {
              if(data?.id == this.zoneId){
                zone = data
              }
          });

          this.menus.map(
              data=>{
                this.menuCommandes.push(this.getMenuCommande(data))
              }
          )

          let commande:Commande={
              id:null,numeroCommande:null,date:null,montant:null,etat:null,
              tailleBoissonCommandes:this.tailleBoissons,
              menuCommandeTailleBoissons:this.menuCommandes,
              burgerCommandes:this.burgers,
              portionFriteCommandes:this.portions,
              zone:zone,
              client:null
          }

          console.log(commande)
          this.token = this.securiteService.getToken();
          if(this.token == null){
                Swal.fire('Annulé', "Connecter-vous ou bien créer un compte SVP", 'error');
                window.sessionStorage.setItem("commande", JSON.stringify(commande));
                this.router.navigate(['/securite/login'])

          }else{
              let success = false;
              if(commande.menuCommandeTailleBoissons?.length == 0 && commande.burgerCommandes?.length == 0){
                Swal.fire('Annulé', 'Choississez au moins un Menu ou un Burger', 'error');
              }else{
                if(commande.zone == null){
                  Swal.fire('Annulé', 'Selectionner une zone de Livraison', 'error');
                }else{
                  this.addCommande = this.servicePanier.addCommande(commande, this.token)
                  this.addCommande?.subscribe(
                    (data) => {
                    },
                    (error) => {
                      if(Number(error.status) == 201){
                        Swal.fire('Commande Validé!', 'Commande Ajouté avec succés', 'success');
                            // this.menus=[];
                            // this.burgers=[];
                            // this.portions=[];
                            // this.tailleBoissons=[];
                            this.servicePanier.clearPanier()
                            this.isExist = false
                      }else{
                        this.notifier.notify("error", "Une erreur est survenue lors de l'ajout de commande")
                      }
                    }
                  )
                }
              }
       
          }
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annulé', 'Commande annulé', 'error');
      }
    });
    let options ={
      title: 'Sure you want to delete this comment?',
      confirmLabel: 'Okay',
      declineLabel: 'Cancel'
    }

  }

  getMenuCommande(data:MenuPanier){
        let menuCom: MenuCommande={
          quantite:0,menu:null,tailleBoissons:[]
        }
        menuCom.menu = data.menu
        menuCom.quantite = Number(data.quantite)

        data.tailleBoissonCheck.map(tbc => {
            tbc?.boissonQuantites?.map(
                bq=>{
                  let mctb: MenuCommandeTailleBoisson={
                      taille:{
                          id:tbc?.idTaille,
                          prix:0,libelle:"",tailleBoissons:[]
                      },
                      quantite:bq.quantite,
                      boisson:{
                        id: bq.boissonId,
                        nom:"",prix:0,image:"",imageReelle:""
                      }
                  }
                  menuCom.tailleBoissons.push(mctb)
                  // console.log(mctb)
                }
            )
        });
        return menuCom
        // console.log(menuCom)
  }

}
