import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SecuriteRoutingModule } from './securite-routing.module';
import { SecuriteComponent } from './securite.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegistreComponent } from './components/form-registre/form-registre.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistreComponent } from './pages/registre/registre.component';
import { HeadComponent } from './components/head/head.component';
import { FootComponent } from './components/foot/foot.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SecuriteComponent,
    FormLoginComponent,
    FormRegistreComponent,
    LoginComponent,
    RegistreComponent,
    HeadComponent,
    FootComponent
  ],
  imports: [
    CommonModule,
    SecuriteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecuriteModule { }
