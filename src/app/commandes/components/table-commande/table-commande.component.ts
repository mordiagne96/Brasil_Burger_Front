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
      let $token = this.securiteService.getToken()
      this.serviceCommande.changeEtat(commande, $token,"annuler").subscribe(
          (data)=>{
              console.log(data)
          },
          (error)=>{
              console.log(error.status)
              if(error.status == 200){
                  Swal.fire('Commande Annuler!', 'Commande annulé avec succés', 'success');
              } 
          }
      )
  }
}
