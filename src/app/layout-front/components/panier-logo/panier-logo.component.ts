import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-panier-logo',
  templateUrl: './panier-logo.component.html',
  styleUrls: ['./panier-logo.component.css']
})
export class PanierLogoComponent implements OnInit {

  @Input() nbre:number=0
  // nbre:number=0

  constructor(private servicePanier:PanierService) {
    // servicePanier.shareNombre.subscribe(
    //     data=>{
    //       this.nbre = data
    //     }
    // )
  }
  
  ngOnInit(): void {
    // this.nombre = this.servicePanier.getNombre()
    // this.servicePanier.getCount().subscribe(
    //     count =>{
    //       // alert(count)
    //       // alert("ok")
    //       this.nbre = count;
    //     }
    // )
  }

}
