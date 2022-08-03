import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandesRoutingModule } from './commandes-routing.module';
import { CommandesComponent } from './commandes.component';
import { LayoutsAdminModule } from '../layouts-admin/layouts-admin.module';
import { ItemtableCommandeComponent } from './components/itemtable-commande/itemtable-commande.component';
import { TableCommandeComponent } from './components/table-commande/table-commande.component';
import { ListeCommandeComponent } from './pages/liste-commande/liste-commande.component';
import { ItemsFiltreComponent } from './components/items-filtre/items-filtre.component';
import { LayoutFrontModule } from '../layout-front/layout-front.module';



@NgModule({
  declarations: [
    CommandesComponent,
    ListeCommandeComponent,
    ItemsFiltreComponent,
    TableCommandeComponent,
    ItemtableCommandeComponent
  ],
  imports: [
    CommonModule,
    CommandesRoutingModule,
    LayoutsAdminModule,
    LayoutFrontModule
  ]
})
export class CommandesModule { }
