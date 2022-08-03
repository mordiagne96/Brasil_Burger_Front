import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { BurgerPanier } from '../../shared/models/burger-panier';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrls: ['./detail-burger.component.css']
})
export class DetailBurgerComponent implements OnInit {

  constructor(private servicePanier:PanierService) { }

  @Output() closeDetail = new EventEmitter<any>();
  @Input() burger:Produit|any=null;

  @ViewChild('quantiteBurger') quantiteBurger:ElementRef|null=null;
  
  bookTitle: string = "detail-burger";

  ngOnInit(): void {
  }

  close(){
    this.closeDetail.emit({ title: this.bookTitle });
  }
  
  addProduitBurger(event:any){
      let burger:BurgerPanier={
          burger:this.burger,
          quantite:this.quantiteBurger?.nativeElement.value
      }

      this.servicePanier.addProduitBurger(burger)

  }
}
