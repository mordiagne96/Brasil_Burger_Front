import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuriteRoutingModule } from './securite-routing.module';
import { SecuriteComponent } from './securite.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegistreComponent } from './components/form-registre/form-registre.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { HeadComponent } from './components/head/head.component';
import { FootComponent } from './components/foot/foot.component';


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
    SecuriteRoutingModule
  ]
})
export class SecuriteModule { }
