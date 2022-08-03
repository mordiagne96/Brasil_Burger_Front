import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() nbre:number=0
  constructor(private servicePanier:PanierService) {
  //   servicePanier.shareNombre.subscribe(
  //     data=>{
  //       this.nbre = data
  //     }
  // )
  // this.nbre = nbre

  }
  ngOnInit(): void {

  }

}
