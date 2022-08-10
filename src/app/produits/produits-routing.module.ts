import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoissonsComponent } from './pages/boissons/boissons.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DetailMenuComponent } from './pages/detail-menu/detail-menu.component';
import { FritesComponent } from './pages/frites/frites.component';
import { ProduitsComponent } from './produits.component';

const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'details-menu/:id', component: DetailMenuComponent },
  { path: 'frites', component: FritesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }
