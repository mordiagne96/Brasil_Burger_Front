import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'app-liste-menu',
  templateUrl: './liste-menu.component.html',
  styleUrls: ['./liste-menu.component.css']
})
export class ListeMenuComponent implements OnInit {

  @Input() menus:Produit[]=[]
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  constructor() { }

  ngOnInit(): void {
  }
  onTableDataChange(event: any) {
    this.page = event;
    // this.fetchPosts();
  }
}
