import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Catalogue } from '../../shared/models/catalogue';
import { Produit } from '../../shared/models/produit';
import { CatalogueService } from '../../shared/service/catalogue.service';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {

  public href: string = "";
  catalogues$ : Observable<Catalogue> | null = null;
  cat:Catalogue|null = null
  constructor(private router: Router, private service:CatalogueService) { }

  visible = false;
  
  show_btn_Add_burger = true;
  show_btn_Add_menu = false;
  produits:Produit[]=[];
  @Input() item = ''; 

  ngOnInit(): void {
    this.href = this.router.url;
    let array= this.href.split("/");

   this.service.all().subscribe(data=>{
        this.produits = data[0].burgers;
        this.produits.map(
          produit=>{
            produit.imageReelle = "data:image/png;base64,"+produit.image
          }
        )
    });

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
