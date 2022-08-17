import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { SecuriteService } from 'src/app/shared/services/securite.service';
import { NotifierService } from 'angular-notifier';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
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
    Swal.fire({
      title: 'Voulez-vous déconnecter?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OUI, je valide.',
      cancelButtonText: "Non, j'annule",
    }).then((result) => {
      if (result.value) {
          this.securiteService.signOut();
          this.router.navigate(['/securite/login'])
      }
    })
  }
}
