import { Commande } from 'src/app/produits/shared/models/commande';
import { Component, Input, OnInit,VERSION } from '@angular/core';

@Component({
  selector: 'app-table-commande',
  templateUrl: './table-commande.component.html',
  styleUrls: ['./table-commande.component.css']
})
export class TableCommandeComponent implements OnInit {

  constructor() { }
  @Input() commandes:Commande[]=[]
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  // tableSizes: any = [3, 6, 9, 12];
  ngOnInit(): void {

  }

  onTableDataChange(event: any) {
    this.page = event;
    // this.fetchPosts();
  }

}
