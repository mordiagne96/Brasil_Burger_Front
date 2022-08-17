import { JwtHelperService } from '@auth0/angular-jwt';
import { SecuriteService } from 'src/app/shared/services/securite.service';
import { CatalogueService } from './../../../produits/shared/service/catalogue.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-items-filtre',
  templateUrl: './items-filtre.component.html',
  styleUrls: ['./items-filtre.component.css']
})
export class ItemsFiltreComponent implements OnInit {

  constructor(private service:CatalogueService, private securiteService:SecuriteService, private jwtService: JwtHelperService) { }
  filterEtat:string ='en cours'
  filterDate:string =''
  filterPrenom:string =''
  filterZone:string =''
  @Output() filterEmitter:EventEmitter<string> = new EventEmitter();
  @Output() filterDateEmitter:EventEmitter<string> = new EventEmitter();
  @Output() filterZoneEmitter:EventEmitter<string> = new EventEmitter();
  @Output() filterPrenomEmitter:EventEmitter<string> = new EventEmitter();
  @Input() zones:any
  token:string|null = ""

  ngOnInit(): void {
      this.token = this.securiteService.getToken();
      if(this.jwtService.decodeToken(this.token as string).roles.includes('ROLE_GESTIONNAIRE')){
        this.filterEmitter.emit(this.filterEtat)
      }
  }

  filtreCommande(event:any){
    this.filterEtat = event.target.value
    // alert(event.target.value)
    if(this.jwtService.decodeToken(this.token as string).roles.includes('ROLE_GESTIONNAIRE')){
      this.filterEmitter.emit(this.filterEtat)
    }
    if(this.jwtService.decodeToken(this.token as string).roles.includes('ROLE_CLIENT')){
      this.service.filterCommandeClient(event.target.value)
    }
  }

  filterDateCommande(date:any){
    // alert(date)
    if(date == ""){
      this.filterDateEmitter.emit("")
    }else{
      this.filterDateEmitter.emit(formatDate(date as string,"dd/MM/yyyy", 'en-US'))
    }
  }
  filterClientCommande(prenom:any){
    // alert(prenom)
      this.filterPrenomEmitter.emit(prenom)
  }

  filterZoneCommande(zone:any){
    // alert(zone.target.value)
    this.filterZoneEmitter.emit(zone.target.value)
  }
}
