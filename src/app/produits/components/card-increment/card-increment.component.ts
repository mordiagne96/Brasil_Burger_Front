import { Quartier } from './../../shared/models/quartier';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-increment',
  templateUrl: './card-increment.component.html',
  styleUrls: ['./card-increment.component.css']
})
export class CardIncrementComponent implements OnInit {

  @Output() quantiteEmit:EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    // this.quantiteEmit.emit(3);
  }

  increment(quantite:any){
    // alert(Number(quantite)+1)
    quantite.value = Number(quantite.value)+1
    // alert(quantite.value)
    this.quantiteEmit.emit(Number(quantite.value));

  }

  decrement(quantite:any){
    let value = Number(quantite.value)-1
    if(value != 0){
      quantite.value = value
    }
    this.quantiteEmit.emit(value);

    // alert(Number(quantite)-1)
  }

}
