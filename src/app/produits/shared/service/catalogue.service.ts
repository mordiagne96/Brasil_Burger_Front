import { CommandeClient } from './../models/commande-client';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogue } from '../models/catalogue';
import { Commande } from '../models/commande';
import { DetailMenu } from '../models/detail-menu';
import { MenuDetail } from '../models/menu-detail';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

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
    return this.http.get<CommandeClient>(`${this.url_back}api/clientCommande/1/${email}`);
  }
  
}
