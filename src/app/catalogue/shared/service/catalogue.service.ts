import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailMenu } from '../models/detail-menu';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private url:string = "http://localhost:3000/"

  constructor(private http:HttpClient) { }

  all():Observable<any[]> {
    return this.http.get<any[]>(`${this.url}catalogues`)
  }

  // getById(id:number):Observable<DetailMenu> {
  //   return this.http.get<DetailMenu>(`${this.url}menus/${id}`)
  // }
  getById(id:number):Observable<DetailMenu> {
    return this.http.get<DetailMenu>(`http://localhost:8000/api/menus/${id}`)
  }
  
  // post$ = (id:number) => {
  //   return this.http.get<Post>(`${this.url}/${id}`)
  // }
}
