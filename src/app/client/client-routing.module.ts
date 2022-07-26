import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ListeCommandeComponent } from './pages/liste-commande/liste-commande.component';

const routes: Routes = [
  { path: 'liste-commandes', component: ListeCommandeComponent },
  { path: '', redirectTo: 'liste-commandes', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
