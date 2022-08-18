import { Component, OnInit } from '@angular/core';
// import { TokenStorageService } from '../_services/token-storage.service';
import { SecuriteService } from '../../../shared/services/securite.service';
import { NotifierService } from 'angular-notifier';
import { PanierService } from '../../../shared/services/panier.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  // private readonly notifier: NotifierService;

  constructor(private panierService:PanierService, private jwtService: JwtHelperService,private router: Router, private securiteService: SecuriteService, private notifier: NotifierService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    // console.log('you submitted value:', form.login);
    this.securiteService.login(form.login, form.password).subscribe({
      next: data => {
        this.securiteService.saveToken(data.token);
        this.securiteService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        if(window.sessionStorage.getItem("commande")!=null){
            let commande:any= window.sessionStorage.getItem("commande")
           
            this.panierService.addCommande(JSON.parse(commande),data.token)?.subscribe(
              (data) => {
              },
              (error) => {
                if(Number(error.status) == 201){
                  this.router.navigate(['/catalogue'])
                  Swal.fire('Commande Validé!', 'Commande Ajouté avec succés', 'success');
                }else{
                  this.notifier.notify("error", "Une erreur est survenue lors de l'ajout de commande")
                }
              }
            )
        }else{
          // console.log(this.jwtService.decodeToken(data.token).username)
          if(this.securiteService.getRole() == "ROLE_GESTIONNAIRE"){
              this.router.navigate(['/commandes/liste-commandes'])
          }else{
              this.router.navigate(['/catalogue'])
          }
          Swal.fire('Hi', 'Connexion reussie!', 'success');
        }
        
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
          Swal.fire('Hi', "Echec de l'authentification! ", 'error');
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
