import { Component, Input, OnInit } from '@angular/core';
import { Taille } from '../../shared/models/taille';

@Component({
  selector: 'app-card-taille',
  templateUrl: './card-taille.component.html',
  styleUrls: ['./card-taille.component.css']
})
export class CardTailleComponent implements OnInit {

  constructor() { }

  @Input() taille:Taille|null=null;
  @Input() quantite:number=0;

  ngOnInit(): void {
  }

}
