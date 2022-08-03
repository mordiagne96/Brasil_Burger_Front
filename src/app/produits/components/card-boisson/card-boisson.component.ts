import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BoissonCheck } from '../../shared/models/boisson-check';
import { Produit } from '../../shared/models/produit';
import { Taille } from '../../shared/models/taille';
// import { Produit } from '../../../catalogue/shared/models/produit';

@Component({
  selector: 'app-card-boisson',
  templateUrl: './card-boisson.component.html',
  styleUrls: ['./card-boisson.component.css']
})
export class CardBoissonComponent implements OnInit {

  constructor() { }

  @Input() boisson:Produit|null=null
  @Input() taille:Taille|null=null
  @Input() tailleId:number|null=null
  @Input() check:boolean=false
  @Input() qteCheck:number|null=null
  @Output() choixBoisson:EventEmitter<any>= new EventEmitter()
  @Output() UnChoixBoisson:EventEmitter<any>= new EventEmitter()
  @ViewChild('idQuantite') idQuantite:ElementRef|null=null;
  @ViewChild('idBoisson') idBoisson:ElementRef|null=null;
  
  boissonCheck:BoissonCheck|null=null

  ngOnInit(): void {
  }

  onChecked(event:any){
    // alert(this.idBoisson?.nativeElement.checked)
      let boisCheck: BoissonCheck = {
          tailleId : this.tailleId,
          boissonId : this.idBoisson?.nativeElement.value,
          quantite:parseInt(this.idQuantite?.nativeElement.value),
          taille:this.taille
      };

      if(this.idBoisson?.nativeElement.checked && this.idQuantite?.nativeElement.value!= "" && event.key != "Shift"){
        // console.log(this.taille)
        this.choixBoisson.emit(boisCheck)
      }else{
          if(!this.idBoisson?.nativeElement.checked){
            this.UnChoixBoisson.emit(boisCheck)
          }
      }
  }

  
}
