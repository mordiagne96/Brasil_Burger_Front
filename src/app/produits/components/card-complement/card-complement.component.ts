import { Component,Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { PortionFriteCommande } from '../../shared/models/portion-frite-commande';
import { Produit } from '../../shared/models/produit';
import { TailleBoisson } from '../../shared/models/taille-boisson';
import { TailleBoissonCommande } from '../../shared/models/taille-boisson-commande';

@Component({
  selector: 'app-card-complement',
  templateUrl: './card-complement.component.html',
  styleUrls: ['./card-complement.component.css']
})
export class CardComplementComponent implements OnInit {

  constructor(private service:PanierService) { }
  @Input() portion:Produit|null=null
  // @Input() imgTailleBoisson:boolean=true
  @Input() tailleBoisson:TailleBoisson|null=null
  @Input() idProd:number=0

  ngOnInit(): void {
  }

  getComplement(event: any, type:string, id:number|undefined){
    // alert(event.target)
    // alert(type+" : "+Number(id))
      if(type =="tailleBoisson"){
          let tbCom:TailleBoissonCommande ={
              tailleBoisson:this.tailleBoisson,
              quantite:1
          }
          if(event.target.checked){
            // alert("check")
            this.service.addTailleBoissonCommande(tbCom) 
          }else{
            this.service.removeTailleBoissCommande(tbCom)
          }
          // let tbc:any = this.service.getTailleBoissonsCommande;
          // console.log(this.service.getBurgers)
      }

      else if(type="portion"){
        let portCom:PortionFriteCommande ={
          portionFrite:this.portion,
          quantite:1
        }
        if(event.target.checked){
          // alert("check")
          this.service.addPortionCommande(portCom) 
        }else{
          this.service.removePortionCommande(portCom)
        }
      }
  }
}
