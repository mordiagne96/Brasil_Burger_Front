import { TailleMenu } from './../../shared/models/taille-menu';
import { MenuService } from './../../../shared/services/menu.service';
import { Taille } from './../../shared/models/taille';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu-taille',
  templateUrl: './card-menu-taille.component.html',
  styleUrls: ['./card-menu-taille.component.css']
})
export class CardMenuTailleComponent implements OnInit {

  constructor(private menuService:MenuService) { }

  quantite: number=1
  @Input() taille: Taille|null=null
  tailleMenu : TailleMenu = {
    id:null,
    quantite:0,
    taille:null
  }

  ngOnInit(): void {
  }

  quantiteEmit(quantite:number){
    // alert(quantite)
    this.quantite = quantite
  }
  checkTaille(event:any,taille:Taille|null){
    // alert(this.quantite)
      // console.log(taille)
      this.tailleMenu.quantite=this.quantite
      this.tailleMenu.taille =taille
      this.menuService.addTaille(this.tailleMenu)
      // console.log(this.menuService.menu)
  }
}
