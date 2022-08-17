import { Livraison } from './../../../produits/shared/models/livraison';
import { LivraisonService } from './../../../shared/services/livraison.service';
import { SecuriteService } from 'src/app/shared/services/securite.service';
import { PanierService } from 'src/app/shared/services/panier.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CatalogueService } from './../../../produits/shared/service/catalogue.service';
import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/produits/shared/models/commande';
import { ZoneDto } from 'src/app/produits/shared/models/zone-dto';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-livraison',
  templateUrl: './add-livraison.component.html',
  styleUrls: ['./add-livraison.component.css']
})
export class AddLivraisonComponent implements OnInit {
  commandes:Commande[]=[]
  $token:string|null =null
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  filterEtat:string=""
  typeLivraison:string="livrer"
  filterZone:string=""
  zoneDto:Observable<ZoneDto> | null =null
  livreurs:any[]=[]
  option:string="liste"
  livraisons:Livraison[]=[]
  constructor(private service: CatalogueService,private serviceLivraison:LivraisonService, private jwtService: JwtHelperService, private securiteService:SecuriteService, private zoneService:PanierService) { }

  ngOnInit(): void {
    this.$token = this.securiteService.getToken();

    if(this.$token != null){
      this.service.getAllCommandes(this.jwtService.decodeToken(this.$token as string).roles.includes('ROLE_GESTIONNAIRE')).subscribe(
        data=>{
          this.commandes = data['hydra:member'].reverse()
          this.commandes =  this.commandes.filter(
            (com)=>{
                return com.etat?.toLowerCase() === "terminer"
            })
            // console.log(this.commandes)
        }
      )
      this.serviceLivraison.getAllLivraisons().subscribe(
        data=>{
          this.livraisons = data['hydra:member'].reverse()
        }
      )
      // console.log(this.commandes)
      this.zoneDto = this.zoneService.getAllZone()
    }

    this.serviceLivraison.getAllLivreurs().subscribe(

      data => {
          this.livreurs = data['hydra:member'].reverse()
      }

    )
    
  }

  checkLivreur(livreur:any){
    this.serviceLivraison.addLivreur(livreur)
  }

  onTableDataChange(event: any) {
    this.page = event;
    // this.fetchPosts();
  }
  filterZoneCommande(zone:string){
    this.filterZone = zone
  }

  addLivraison(){
    if(this.serviceLivraison.livraison?.commandes?.length !=0 && this.serviceLivraison.livraison?.livreur != null){
      this.serviceLivraison.addLivraison(this.$token as string).subscribe(
        (data)=>{
          console.log(data)
          Swal.fire('Livraison Validé!', 'Livraison Ajouté avec succés', 'success');
          this.service.getAllCommandes(this.jwtService.decodeToken(this.$token as string).roles.includes('ROLE_GESTIONNAIRE')).subscribe(
            data=>{
              this.commandes = data['hydra:member'].reverse()
              this.commandes =  this.commandes.filter(
                (com)=>{
                    return com.etat?.toLowerCase() === "terminer"
                })
                // console.log(this.commandes)
            }
          )
        },
        (error)=>{
          console.log(error);
          if(Number(error.status) == 201){
            Swal.fire('Livraison Validé!', 'Livraison Ajouté avec succés', 'success');
          }
        }
      )
    }else{
      Swal.fire('Error!', 'Veuillez Choisir les commandes et un livreur', 'error');
    }
  }

  listeLivraison(){
    this.option = "liste"
    this.serviceLivraison.getAllLivraisons().subscribe(
      data=>{
        this.livraisons = data['hydra:member'].reverse()
      }
    )
  }

  nouvelleLivraison(){
    this.service.getAllCommandes(this.jwtService.decodeToken(this.$token as string).roles.includes('ROLE_GESTIONNAIRE')).subscribe(
      data=>{
        this.commandes = data['hydra:member'].reverse()
        this.commandes =  this.commandes.filter(
          (com)=>{
              return com.etat?.toLowerCase() === "terminer" && com.zone != null
          })
          console.log(this.commandes)
      }
    )
    console.log(this.commandes);
    if(this.commandes.length == 0){
      Swal.fire('Attention!', 'Pas de commande à livrer', 'warning');
    }else{
      this.option = "nouvelle"
    }
  }


}
