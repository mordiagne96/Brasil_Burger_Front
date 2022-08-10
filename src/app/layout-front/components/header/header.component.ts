import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { SecuriteService } from 'src/app/shared/services/securite.service';
import { NotifierService } from 'angular-notifier';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import {Router} from "@angular/router"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() nbre:number=0
  constructor(private router: Router,private servicePanier:PanierService, private securiteService:SecuriteService,private notifier: NotifierService,private notifierConfirme:NgxBootstrapConfirmService) {
  //   servicePanier.shareNombre.subscribe(
  //     data=>{
  //       this.nbre = data
  //     }
  // )
  // this.nbre = nbre

  }
  ngOnInit(): void {

  }
  deconnexion(){
    let options ={
      title: 'Est que vous voulez vraiment déconnecter ?',
      confirmLabel: 'Okay',
      declineLabel: 'Cancel'
    }
    this.notifierConfirme.confirm(options).then(
        (resp:boolean) => {
          if(resp){
            this.securiteService.signOut();
            this.router.navigate(['/securite/login'])
            this.notifier.notify("success","Votre session vient d'etre fermé!")

          }
        }
    );
  }
}
