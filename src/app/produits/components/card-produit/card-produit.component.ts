import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'app-card-produit',
  templateUrl: './card-produit.component.html',
  styleUrls: ['./card-produit.component.css']
})
export class CardProduitComponent implements OnInit {

  constructor() { }

  @Input()  burger:Produit|null=null;
  @Input()  quantite:number=0;

  ngOnInit(): void {
    
  }

}
