import { Zone } from './../../../produits/shared/models/zone';
import { ZoneDto } from 'src/app/produits/shared/models/zone-dto';
import { PanierService } from 'src/app/shared/services/panier.service';
import { CommandeClient } from './../../../produits/shared/models/commande-client';
import { Component, OnInit, Injectable } from '@angular/core';
// import { CatalogueService } from '../shared/services/securite.service';
// import { CatalogueService } from '../../../';
import { BehaviorSubject, iif, Observable } from 'rxjs';
import { Commande } from '../../../produits/shared/models/commande';
import { CatalogueService } from '../../../produits/shared/service/catalogue.service';
import { SecuriteService } from '../../../shared/services/securite.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})

export class ListeCommandeComponent implements OnInit {
  commandes$ : Observable<CommandeClient> | null = null;
  token:string|null=null;
  commandes:Commande[]=[]
  filterEtat : string = ''
  filterDate : string = formatDate(new Date(),"yyyy-MM-dd", 'en-US')
  filterPrenom : string = ''
  filterZone : string = ''
  zoneDto:Observable<ZoneDto> | null =null
  role:string = "gestionnaire"
  // zoneDto: ZoneDto | null = null
  // commandeObsevable
  constructor(private service:CatalogueService,private panierService:PanierService, private securiteService: SecuriteService, private jwtService: JwtHelperService) { }

  ngOnInit(): void {
    
    this.token = this.securiteService.getToken();
    if(this.token != null){
      let all: Zone[] = []
      this.zoneDto = this.panierService.getAllZone()
      // this.panierService.getAllZone().subscribe(
      //   data=>{
      //       all = data.zones
      //       console.log(all)
      //       // console.log(this.zones[0].quartiers[0].libelle)
      //       return data.zones;
      //   }
      // )
      // console.log(all)
      // console.log(this.jwtService.decodeToken(this.token))
      if(this.jwtService.decodeToken(this.token).roles.includes('ROLE_GESTIONNAIRE')){
          // alert("gestionnaire")
         this.role="gestionnaire"
        this.service.getAllCommandes(this.token).subscribe(data=>{
            // console.log(data)
            this.commandes = data['hydra:member'].reverse()
            console.log(this.commandes);
            
            // this.commandes.map(
            //   data=>{
            //     data.date = formatDate(data.date as string,"dd/MM/yyyy", 'en-US')
            //     // data.date = new Date()
            //     // let now = new Date()
            //     // data.date = formatDate(now ,"dd/MM/yyyy", 'en-US')
                
            //   }
            // )
        })

      }
      if(this.jwtService.decodeToken(this.token).roles.includes('ROLE_CLIENT')){
          // alert("client")
          this.role="client"
          this.commandes$ = this.service.getCommandeByEmail(this.jwtService.decodeToken(this.token).username,this.token);
          this.commandes$?.subscribe(
            data=>{
              console.log(data.commandes);
              this.commandes = data.commandes;
            }
        )
      }
     

      this.service.commandeObservable.subscribe(data=>this.commandes=data.reverse())
    }
  }

  filterEmitter(filterEtat:string){
      this.filterEtat = filterEtat
  }

  filterDateEmitter(filterDate:string){
    // alert(filterDate)
      this.filterDate = filterDate
  }

  filterPrenomEmitter(filterPrenom:string){
      this.filterPrenom = filterPrenom
  }

  filterZoneCommande(filterZone:string){
    this.filterZone = filterZone
  }
}
