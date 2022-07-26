import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  visible=false;
  bookTitle: string = "detail";
  
  @Output() showDetail = new EventEmitter<any>();
  @Input('show') show_btn_Add_burger : Boolean =false;
  @Input('show-menu') show_btn_Add_menu : Boolean =false;
  ngOnInit(): void {
  }
  myFunction() {
    this.showDetail.emit({ title: this.bookTitle });
    // this.visible = true;
    // alert("ok")
  }
}
