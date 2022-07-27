import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private url:string = "http://localhost:3000/catalogues"

  constructor(private http:HttpClient) { }

  all():Observable<any[]> {
    return this.http.get<any[]>(this.url)
  }
}
