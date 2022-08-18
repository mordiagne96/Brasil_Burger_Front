import { SecuriteService } from 'src/app/shared/services/securite.service';
import { CommandeService } from './../../../shared/services/commande.service';
import { FilterZonePipe } from './../../filter-zone.pipe';
import { Commande } from 'src/app/produits/shared/models/commande';
import { Component, Input, OnInit,VERSION } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-commande',
  templateUrl: './table-commande.component.html',
  styleUrls: ['./table-commande.component.css']
})
export class TableCommandeComponent implements OnInit {

  constructor(private serviceCommande: CommandeService, private securiteService:SecuriteService) { }
  @Input() commandes:Commande[]=[]
  @Input() role:string=""
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  @Input() filterEtat:string=''
  @Input() filterDate:string=''
  @Input() filterPrenom:string=''
  @Input() filterZone:string =''
  // tableSizes: any = [3, 6, 9, 12];
  ngOnInit(): void {

  }

  onTableDataChange(event: any) {
    this.page = event;
    // this.fetchPosts();
  }

  annulerCommande(commande:Commande){
      // let $token = this.securiteService.getToken()
      // this.serviceCommande.changeEtat(commande, $token,"annuler").subscribe(
      //     (data)=>{
      //         console.log(data)
      //     },
      //     (error)=>{
      //         if(error.status == 200){
      //             Swal.fire('Commande Annuler!', `Commande annulé avec succés`, 'success');
      //         } 

      //         if(error.status == 400){
      //             console.log(error.message)
      //             Swal.fire('Attention!', 'Impossible de changer l\'etat du commande ', 'error');
      //         }
      //     },
      //     ()=>{
      //       console.error("kkkk")
      //     }
      // )

      this.changeEtat(commande, "annuler")

  }

  changeEtat(commande:Commande, etat:string){
    let $token = this.securiteService.getToken()
      this.serviceCommande.changeEtat(commande, $token,"annuler").subscribe(
          (data)=>{
              console.log(data)
          },
          (error)=>{
              if(error.status == 200){
                  Swal.fire(`Commande ${etat} !`, `Commande ${etat} avec succés`, 'success');
                  this.commandes.map(
                    (data)=>{
                      if(data.id == commande.id){
                        data.etat = etat
                      }
                    }
                  )
                   this.commandes = this.commandes.filter(
                    (commande)=>{
                      return commande.etat === "en cours"
                    })
              } 

              if(error.status == 400){
                  console.log(error.message)
                  Swal.fire('Attention!', `Impossible de passer la commande à ${etat}`, 'error');
              }
          },
          ()=>{
            console.error("je suis la")
          }
      )
  }
}
