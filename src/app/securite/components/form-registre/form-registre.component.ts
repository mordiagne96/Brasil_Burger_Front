import { Router } from '@angular/router';
import { SecuriteService } from 'src/app/shared/services/securite.service';
import { NumeroTelephoneService } from './../../../shared/services/numero-telephone.service';
import { ValidatorNumero } from './../../../shared/validators/numero.validator';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-registre',
  templateUrl: './form-registre.component.html',
  styleUrls: ['./form-registre.component.css']
})
export class FormRegistreComponent implements OnInit {

  @Output() alertEmitter:EventEmitter<any>=new EventEmitter()
  errorNumero:string =""
  passwordValid:boolean | null=null
  constructor(private fb: FormBuilder,private router:Router, private serviceTel:NumeroTelephoneService, private serviceSecurite:SecuriteService) { }

  formRegister = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    login: new FormControl(''),
    telephone: new FormControl(''),
    adresse: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', [Validators.required]],
      login: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required,   Validators.pattern("^[0-9]*$"),
      Validators.minLength(9), Validators.maxLength(9)]],
      adresse: ['', [Validators.required, Validators.min(3)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*\d).{6,}$/i)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*\d).{6,}$/i)]],

      // message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  onSubmit(form: FormGroup){
  
    if(form.valid && this.passwordValid==true){
      // alert("form valid")
      // console.log(form.value);
      this.serviceSecurite.registre(form.value).subscribe(
        {
          next: data=>{
            console.log(data)
            if(data.code == 201){
              Swal.fire('Salut', 'Compte crée avec succés', 'success');
              this.router.navigate(['/securite/login'])
            }
          },
          error: error=>{
            console.log(error)
          }
        }
      )                                              
      
    }else{
      this.alertEmitter.emit(true)
    }
    
    
  }

  validNumeroTelephone(event:any){
    // console.log(event.target.value)
    this.errorNumero ="Ce numéro n'existe pas"  
  }

  validPassword(event:any){
    if(this.formRegister.value.password == this.formRegister.value.confirmPassword){
      this.passwordValid = true
    } else{
      this.passwordValid = false
    }
  }
}
