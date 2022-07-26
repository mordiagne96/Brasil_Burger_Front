import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  visible=false;
  bookTitle: string = "detail";
  ngOnInit(): void {
  }
  @Output() showDetail = new EventEmitter<any>();
  
  
  myFunction() {
    this.showDetail.emit({ title: this.bookTitle });
    // this.visible = true;
    // alert("ok")
  }
}
