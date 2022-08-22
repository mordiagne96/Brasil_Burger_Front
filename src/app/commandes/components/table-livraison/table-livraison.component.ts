import { LivraisonService } from './../../../shared/services/livraison.service';
import { SecuriteService } from 'src/app/shared/services/securite.service';
import { Livraison } from './../../../produits/shared/models/livraison';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-livraison',
  templateUrl: './table-livraison.component.html',
  styleUrls: ['./table-livraison.component.css']
})
export class TableLivraisonComponent implements OnInit {

  @Input() livraisons:Livraison[]=[]
  @Input() filterEtatLivraison:string="en cours"
  @Output() showDetailEvent: EventEmitter<Livraison> = new EventEmitter();
  token: string|null=""
  success:boolean = false
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  constructor(private serviceSecurite:SecuriteService, private serviceLivraison:LivraisonService) { }

  ngOnInit(): void {
    this.token = this.serviceSecurite.getToken()
  }

  validerLivraison(livraison:Livraison){
      this.serviceLivraison.changeEtatLivraison(livraison,this.token as string).subscribe(
        (data)=>{
          console.log(data)
        },
        (error)=>{
          console.log(error)
          if(error.status == 201){
            this.success = true
          }
        },
        ()=>{
          // console.log("complete")
          this.success = true
          setTimeout(()=>{
            this.success = false 
          }, 5000)
        }
      )
  }

  detailsLivraison(livraison:Livraison){
    this.showDetailEvent.emit(livraison)
  }


  onTableDataChange(event: any) {
    this.page = event;
    // this.fetchPosts();
  }
}
