import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  visible=false;
  data: string = "detail";
  
  @Output() showDetail:EventEmitter<number> = new EventEmitter();
  @Input('show') show_btn_Add_burger : Boolean =false;
  @Input('show-menu') show_btn_Add_menu : Boolean =false;
  @Input('catalogue_burger') burger : Produit|null = null;

  @Input() idBurger:number=0;
  @Output() id:number|null=null;
  @Input() detailProduit:Produit|null=null;

  ngOnInit(): void {
      
  }
  myFunction() {
    // this.id = this.idBurger;
    // alert(this.idBurger)
    this.showDetail.emit(this.idBurger);
    // this.visible = true;
    // alert("ok")
  }
}
