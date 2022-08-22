import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './commandes.component';
import { ListeCommandeComponent } from './pages/liste-commande/liste-commande.component';
import { AddLivraisonComponent } from './pages/add-livraison/add-livraison.component';
import { AccessProduit } from '../access-produit.guard';

const routes: Routes = [
  { path: 'liste-commandes', component: ListeCommandeComponent },
  { path: 'add-livraison', component: AddLivraisonComponent, canActivate:[AccessProduit] },
  { path: '', component: CommandesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesRoutingModule { }
