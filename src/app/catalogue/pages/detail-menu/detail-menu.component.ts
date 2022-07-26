import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

  constructor() { }

  show_btn_Add_burger = false;
  show_btn_Add_menu = true;

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
