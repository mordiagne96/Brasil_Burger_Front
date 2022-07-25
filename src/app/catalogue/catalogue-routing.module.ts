import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue.component';
import { DetailMenuComponent } from './components/detail-menu/detail-menu.component';
import { PanierComponent } from './components/panier/panier.component';

const routes: Routes = [
  { path: 'details/Menu', component: DetailMenuComponent },
  { path: 'panier', component: PanierComponent },
  { path: '', component: CatalogueComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
