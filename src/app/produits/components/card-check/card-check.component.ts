import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Taille } from '../../shared/models/taille';
import { TailleBoisson } from '../../shared/models/taille-boisson';

@Component({
  selector: 'app-card-check',
  templateUrl: './card-check.component.html',
  styleUrls: ['./card-check.component.css']
})
export class CardCheckComponent implements OnInit {

  @Input() taille:Taille|null=null;
  @Input() tailleboissons:any=[];

  @Output() getBoissonBy:EventEmitter<Taille|null> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {

  }

  chargerBoisson(){
    // console.log(this.tailleboissons);
    this.getBoissonBy.emit(this.taille)
    // alert(this.tailleboissons);
  }

}
