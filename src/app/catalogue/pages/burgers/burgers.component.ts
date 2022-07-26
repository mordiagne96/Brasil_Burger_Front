import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {

  public href: string = "";

  constructor(private router: Router) { }
  visible = false;
  show_btn_Add_burger = true;
  show_btn_Add_menu = false;
  @Input() item = ''; 
  ngOnInit(): void {
    this.href = this.router.url;
    let array= this.href.split("/");
    // alert(array[array.length-1]);
    if(array[array.length-1]==="burgers"){
      this.show_btn_Add_burger = true;
      this.show_btn_Add_menu = false;
    }
  }

  onBookAdded(eventData: { detail: string }) {
      // alert("parent")
      this.visible = true;
  }

  closeDetail(eventData: { detail: string }) {
      // alert("close")
      this.visible = false;

  }
}
