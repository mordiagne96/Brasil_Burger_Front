import { Router } from '@angular/router';
import { SecuriteService } from './shared/services/securite.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AccessPanierGuard implements CanActivate {
  constructor(private serviceSecurite:SecuriteService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.serviceSecurite.isConnect() || this.serviceSecurite.isConnect() && this.serviceSecurite.getRole()=="ROLE_CLIENT"){
        return true;
      }else{
        if(this.serviceSecurite.isConnect() && this.serviceSecurite.getRole() == "ROLE_GESTIONNAIRE"){
          Swal.fire('Attention', "Vous n'avez pas l'accés a cette route", 'warning');
          // this.router.navigate(["/commandes/liste-commandes"])
          return false
        }
      }
      return true
  }
  
}
