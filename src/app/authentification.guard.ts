import { Router } from '@angular/router';
import { SecuriteService } from './shared/services/securite.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  constructor(private serviceSecurite: SecuriteService, private router:Router){}
  canActivate(
    next:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let isConnect = this.serviceSecurite.isConnect()
      if(isConnect){
        return true
      }else{
        this.router.navigate(['/catalogue'])
      }
    return true;
  }
  
}
