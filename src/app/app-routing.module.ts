import { AccessPanierGuard } from './access-panier.guard';
import { AuthentificationGuard } from './authentification.guard';
import { SecuriteService } from './shared/services/securite.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes =[
      { path: 'securite', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
      { path: '', redirectTo: 'catalogue',pathMatch:"full"}, 
      // { path: 'catalogue', loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule) },
      // { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
      { path: 'catalogue', loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule) },
      { path: 'commandes', loadChildren: () => import('./commandes/commandes.module').then(m => m.CommandesModule), canActivate:[AuthentificationGuard] },
      { path: 'panier', loadChildren: () => import('./panier/panier.module').then(m => m.PanierModule), canActivate:[AccessPanierGuard]},
      { path: "**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[SecuriteService, AuthentificationGuard]
})
export class AppRoutingModule { }
