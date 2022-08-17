import { LivraisonService } from './../../../shared/services/livraison.service';

import { Component, Input, OnInit } from '@angular/core';
import { Commande } from 'src/app/produits/shared/models/commande';

@Component({
  selector: 'app-card-check-livraison',
  templateUrl: './card-check-livraison.component.html',
  styleUrls: ['./card-check-livraison.component.css']
})
export class CardCheckLivraisonComponent implements OnInit {

  @Input() commande: Commande|null=null
  constructor(private serviceLivraison: LivraisonService) { }

  ngOnInit(): void {
  }

  checkCommande(event:any, commande:Commande|null){
    if(event.target.checked){
      this.serviceLivraison.addCommande(commande as Commande)
    }else{
      this.serviceLivraison.removeCommande(commande as Commande)
    }
    console.log(this.serviceLivraison.livraison)
  }
}
