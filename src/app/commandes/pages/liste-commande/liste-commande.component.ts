import { CommandeClient } from './../../../produits/shared/models/commande-client';
import { Component, OnInit } from '@angular/core';
// import { CatalogueService } from '../shared/services/securite.service';
// import { CatalogueService } from '../../../';
import { Observable } from 'rxjs';
import { Commande } from '../../../produits/shared/models/commande';
import { CatalogueService } from '../../../produits/shared/service/catalogue.service';
import { SecuriteService } from '../../../shared/services/securite.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {
  commandes$ : Observable<CommandeClient> | null = null;
  token:string|null=null;
  commandes:Commande[]=[]
  constructor(private service:CatalogueService, private securiteService: SecuriteService, private jwtService: JwtHelperService) { }

  ngOnInit(): void {
    this.token = this.securiteService.getToken();
    if(this.token != null){
      this.commandes$ = this.service.getCommandeByEmail(this.jwtService.decodeToken(this.token).username,this.token);
      this.commandes$?.subscribe(
          data=>{
            // console.log(data.commandes);
            this.commandes = data.commandes;
          }
      )
    }
  }



}
