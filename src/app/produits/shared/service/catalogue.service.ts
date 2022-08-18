import { CommandeClient } from './../models/commande-client';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Catalogue } from '../models/catalogue';
import { Commande } from '../models/commande';
import { DetailMenu } from '../models/detail-menu';
import { MenuDetail } from '../models/menu-detail';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  commandes:Commande[]=[]
  commandesSource:Commande[]=[]
  commandeSubject = new BehaviorSubject(this.commandes)
  commandeObservable = this.commandeSubject.asObservable();
  // private url:string = "http://localhost:3000/";
  private url_back:string = "http://localhost:8000/";

  constructor(private http:HttpClient) { }

  all():Observable<Catalogue> {
    return this.http.get<Catalogue>(`${this.url_back}api/cataloguees/1`);
  }

  getById(id:number):Observable<MenuDetail> {
    // return this.http.get<DetailMenu>(`http://localhost:8000/api/menus/${id}`)
    return this.http.get<MenuDetail>(`http://localhost:8000/api/detail_menus/${id}`)
  }

  getCommandeByEmail(email:string,token:string):Observable<CommandeClient> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }   
    let commandesClient = this.http.get<CommandeClient>(`${this.url_back}api/clientCommande/1/${email}`);
    commandesClient.subscribe(
      data=>{
        
          this.commandes =  data.commandes.reverse()

          this.commandes.map(
              data=>{
                  data.date = formatDate(data.date as string,"dd-MM-yyyy", 'en-US')
              }
          )

          this.commandesSource= data.commandes.reverse()
          this.commandeSubject.next(this.commandes)
      }
    )
    return commandesClient;
  }
  
  filterCommandeClient(type:string){
    // alert()
    switch (type) {
      case "en cours":
        this.commandes = this.commandesSource.filter(commande=>commande.etat=="en cours").reverse()
        break;
      case "terminer":
          this.commandes = this.commandesSource.filter(commande=>commande.etat=="terminer").reverse()
        break;
      case "valider":
        this.commandes = this.commandesSource.filter(commande=>commande.etat=="valider").reverse()
        break;
      case "en livraison":
        this.commandes = this.commandesSource.filter(commande=>commande.etat=="en livraison").reverse()
        break;
      case "annuler":
        this.commandes = this.commandesSource.filter(commande=>commande.etat=="annuler").reverse()
        break;
      default:
        this.commandes = this.commandesSource 
        break;
    }
    this.commandeSubject.next(this.commandes)
  }

  getAllCommandes(token:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.get<any>(`${this.url_back}api/commandes`)  
  }

}
