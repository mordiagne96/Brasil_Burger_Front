import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumeroTelephoneService {

  constructor(private http:HttpClient) { }

  path_api : string = "https://phonevalidation.abstractapi.com/v1/?api_key=de88a55050f44b7ab4a586e47d92f29a&phone="

  verifyNumeroTelephone(numero:string):Observable<any>{
      return this.http.get<any>(this.path_api + `${numero}`)
  }
}
