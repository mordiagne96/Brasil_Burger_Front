import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-smd-option',
  templateUrl: './smd-option.component.html',
  styleUrls: ['./smd-option.component.css']
})
export class SmdOptionComponent implements OnInit {

  constructor() { }

  @Input() typeCatalogue:string = ""
  @Output() fitreCatalogue:EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  ChangeCatalogue(type:string){
    this.fitreCatalogue.emit(type);
  }

}
