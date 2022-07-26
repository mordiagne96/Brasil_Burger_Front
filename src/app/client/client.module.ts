import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ListeCommandeComponent } from './pages/liste-commande/liste-commande.component';
import { LayoutsAdminModule } from '../layouts-admin/layouts-admin.module';
import { CatalogueModule } from '../catalogue/catalogue.module';
import { ItemsFiltreComponent } from './components/items-filtre/items-filtre.component';
import { TableCommandeComponent } from './components/table-commande/table-commande.component';
import { ItemtableCommandeComponent } from './components/itemtable-commande/itemtable-commande.component';


@NgModule({
  declarations: [
    ClientComponent,
    ListeCommandeComponent,
    ItemsFiltreComponent,
    TableCommandeComponent,
    ItemtableCommandeComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutsAdminModule,
    CatalogueModule,
  ]
})
export class ClientModule { }
