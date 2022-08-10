import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './commandes.component';
import { ListeCommandeComponent } from './pages/liste-commande/liste-commande.component';

const routes: Routes = [
  { path: 'liste-commandes', component: ListeCommandeComponent },
  { path: '', component: CommandesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesRoutingModule { }