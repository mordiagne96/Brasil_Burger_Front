import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  show_btn_Add_burger = false;
  show_btn_Add_menu = true;
  ngOnInit(): void {
    
  }

}
