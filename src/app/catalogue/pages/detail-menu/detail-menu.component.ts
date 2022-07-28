import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogueService } from '../../shared/service/catalogue.service';

import { Produit } from '../../shared/models/produit';
import { DetailMenu } from '../../shared/models/detail-menu';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

  constructor(private router: Router, private service:CatalogueService) { }
  href: string="";
  show_btn_Add_burger = false;
  show_btn_Add_menu = true;
  array:any=[];

  id:number=0;

  menu : Observable<DetailMenu>|null=null;

  ngOnInit(): void {
    
    window.scroll(0,0);
    this.href = this.router.url;
    // alert(this.href)
    this.array = this.href.split("/");
    this.id = this.array[this.array.length - 1]

    this.menu = this.service.getById(this.id)
    // console.log(this.menu)
    // this.service.getById(this.id).subscribe(
    //   data=>{
    //     console.log(data);
    //   }
    // )
    // alert(this.id)

    // this.service.getById(this.id).subscribe(
    //   data=>{
    //     console.log(data);
    //   }
    // )
  }

}
