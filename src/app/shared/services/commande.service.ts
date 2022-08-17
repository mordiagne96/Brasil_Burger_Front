import { Commande } from './../../produits/shared/models/commande';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private url_back:string = "http://localhost:8000/";

  constructor(private http:HttpClient) { }

  changeEtat(commande:Commande, token:string|null,etat:string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.put<any>(this.url_back + `updateEtat/${commande.id}/${etat}`, null, httpOptions)
  }
}
