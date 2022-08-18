import { Commande } from 'src/app/produits/shared/models/commande';
import { Livraison } from './../../produits/shared/models/livraison';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  livraison?: Livraison={
    commandes:[],
    livreur:null
  }
  private url_back:string = "http://localhost:8000/";
  
  constructor(private http:HttpClient) { }

  addCommande(commande:Commande){
    
      let com:Commande={
        id:commande.id
      }
      
      this.livraison?.commandes?.push(com)
  }

  removeCommande(commande:Commande){
    let indexOfObject :number|undefined = this.livraison?.commandes?.findIndex((object) => {
      return object.id === commande.id
    });
    
    if (indexOfObject !== -1) {
      this.livraison?.commandes?.splice(Number(indexOfObject), 1);
    }
  }

  addLivreur(livreur:any){
      this.livraison!.livreur = {
        "id":livreur.id
      }
      console.log(this.livraison)
  }

  getAllLivreurs():Observable<any> {
    return this.http.get<any>(`${this.url_back}api/livreurs`);
  }

  getAllLivraisons():Observable<any> {
    return this.http.get<any>(`${this.url_back}api/livraisons`);
  }

  addLivraison(token:string): Observable<any>{
        let httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          })
        }
    return this.http.post<any>(this.url_back + 'api/livraisons', JSON.stringify(this.livraison), httpOptions)
  }

  changeEtatLivraison(livraison:Livraison,token:string){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }),
    }
    let liv = {
      id:livraison.id
    }
    return this.http.put<any>(this.url_back + `api/livraisons/${livraison.id}/valider`, JSON.stringify(liv), httpOptions)
  }

  getLivraisonById(livraison:Livraison, token:string){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      })
    }
    return this.http.get<any>(this.url_back + `api/livraisons/${livraison.id}`,httpOptions)
  }

}
