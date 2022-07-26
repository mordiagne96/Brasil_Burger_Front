import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrls: ['./detail-burger.component.css']
})
export class DetailBurgerComponent implements OnInit {

  constructor() { }

  @Output() closeDetail = new EventEmitter<any>();
  bookTitle: string = "detail-burger";
  ngOnInit(): void {
  }

  close(){
    this.closeDetail.emit({ title: this.bookTitle });
  }
}
