import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue.component';
import { DetailMenuComponent } from './pages/detail-menu/detail-menu.component';
import { PanierComponent } from './pages/panier/panier.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BurgersComponent } from './pages/burgers/burgers.component';
import { BoissonsComponent } from './pages/boissons/boissons.component';
import { FritesComponent } from './pages/frites/frites.component';

const routes: Routes = [
  { path: 'details-menu/:id', component: DetailMenuComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'panier/:id', component: PanierComponent },
  { path: 'menus', component: MenuComponent },
  { path: 'burgers', component: BurgersComponent },
  { path: 'boissons', component: BoissonsComponent },
  { path: 'frites', component: FritesComponent },
  { path: '', redirectTo: 'burgers',pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
