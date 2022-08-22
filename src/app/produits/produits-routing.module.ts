import { AccessProduit } from './../access-produit.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './pages/add-menu/add-menu.component';
import { BoissonsComponent } from './pages/boissons/boissons.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DetailMenuComponent } from './pages/detail-menu/detail-menu.component';
import { FritesComponent } from './pages/frites/frites.component';
import { ProduitsComponent } from './produits.component';
import { AccessPanierGuard } from '../access-panier.guard';

const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: '?catalogue=menus', component: CatalogueComponent},
  { path: 'details-menu/:id', component: DetailMenuComponent },
  { path: 'frites', component: FritesComponent, canActivate:[AccessPanierGuard] },
  { path: 'addMenu', component: AddMenuComponent,  canActivate:[AccessProduit]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }
