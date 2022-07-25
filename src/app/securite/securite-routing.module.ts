import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { SecuriteComponent } from './securite.component';

const routes: Routes = [
  { path: '', component: SecuriteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuriteRoutingModule { }
