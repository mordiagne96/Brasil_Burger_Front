import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-card-produit-commande',
  templateUrl: './card-produit-commande.component.html',
  styleUrls: ['./card-produit-commande.component.css']
})
export class CardProduitCommandeComponent implements OnInit {

  @Input() produit:any
  @Input() quantite:number|null=null


  constructor(private servicePanier:PanierService) { }

  ngOnInit(): void {

  }

  removeProduit(id:string){
    this.servicePanier.removeProduit(Number(id))
    // alert(id)
    alert("suppression avec succés")
  }

}
