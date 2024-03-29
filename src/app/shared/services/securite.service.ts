import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SecuriteService {

  private url_back:string = "http://localhost:8000/api/";

  constructor(private http:HttpClient, private serviceJwt : JwtHelperService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.url_back + 'login_check', {
      username,
      password
    }, httpOptions);
  }
  
  registre(client:any): Observable<any> {
    return this.http.post(this.url_back + 'addClient', client, httpOptions);
  }

  isConnect(){
    if(this.getToken() == null){
      return false
    }
    return true
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(email: string): void {
    this.getUserByLogin(email).subscribe({
      next: data =>{
          window.sessionStorage.removeItem(USER_KEY);
          window.sessionStorage.setItem(USER_KEY, JSON.stringify(data));
      }
    }
    )
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public getRole(){
    if(this.serviceJwt.decodeToken(this.getToken() as string).roles.includes('ROLE_GESTIONNAIRE')){
      return 'ROLE_GESTIONNAIRE';
    }
    if(this.serviceJwt.decodeToken(this.getToken() as string).roles.includes('ROLE_CLIENT')){
      return 'ROLE_CLIENT';
    }
    return 'ROLE_VISITEUR'
  }

  decodeToken(){
    return this.serviceJwt.decodeToken(this.getToken() as string)
  }

  getUserByLogin(email:string):Observable<any>{
    return this.http.get(this.url_back + `user-connect/1/${email}`, httpOptions);
  }
}
