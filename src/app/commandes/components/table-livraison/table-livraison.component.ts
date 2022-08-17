import { Livraison } from './../../../produits/shared/models/livraison';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-livraison',
  templateUrl: './table-livraison.component.html',
  styleUrls: ['./table-livraison.component.css']
})
export class TableLivraisonComponent implements OnInit {

  @Input() livraisons:Livraison[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
