import { FilterEtatPipe } from './filter-etat.pipe';
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
import { ItemLigneCommandeComponent } from './components/item-ligne-commande/item-ligne-commande.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FilterDatePipe } from './filter-date.pipe';
import { FilterPrenomPipe } from './filter-prenom.pipe';
import { FilterZonePipe } from './filter-zone.pipe';
import { AddLivraisonComponent } from './pages/add-livraison/add-livraison.component';
import { CardCheckLivraisonComponent } from './components/card-check-livraison/card-check-livraison.component';
import { FilterTypeCommandePipe } from './filter-type-commande.pipe';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { TableLivraisonComponent } from './components/table-livraison/table-livraison.component';

@NgModule({
  declarations: [
    CommandesComponent,
    ListeCommandeComponent,
    ItemsFiltreComponent,
    TableCommandeComponent,
    ItemtableCommandeComponent,
    ItemLigneCommandeComponent,
    FilterEtatPipe,
    FilterDatePipe,
    FilterPrenomPipe,
    FilterZonePipe,
    AddLivraisonComponent,
    CardCheckLivraisonComponent,
    FilterTypeCommandePipe,
    TableLivraisonComponent
  ],
  imports: [
    CommonModule,
    CommandesRoutingModule,
    LayoutsAdminModule,
    LayoutFrontModule,
    NgxPaginationModule,AutocompleteLibModule,
    FormsModule
  ],
  exports:[
  ]
})
export class CommandesModule { }
