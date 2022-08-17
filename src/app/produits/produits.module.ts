import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { ProduitsComponent } from './produits.component';
import { SlideComponent } from './components/slide/slide.component';
import { SmdOptionComponent } from './components/smd-option/smd-option.component';
import { CardComponent } from './components/card/card.component';
import { DetailBurgerComponent } from './components/detail-burger/detail-burger.component';
import { DetailMenuComponent } from './pages/detail-menu/detail-menu.component';
import { CardProduitComponent } from './components/card-produit/card-produit.component';
import { CardProduitCommandeComponent } from './components/card-produit-commande/card-produit-commande.component';
import { CardBoissonComponent } from './components/card-boisson/card-boisson.component';
import { CardTailleComponent } from './components/card-taille/card-taille.component';
import { BoissonsComponent } from './pages/boissons/boissons.component';
import { FritesComponent } from './pages/frites/frites.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { CardCheckComponent } from './components/card-check/card-check.component';
import { LayoutFrontModule } from '../layout-front/layout-front.module';
import { CardComplementComponent } from './components/card-complement/card-complement.component';
import { AddMenuComponent } from './pages/add-menu/add-menu.component';
import { LayoutsAdminModule } from '../layouts-admin/layouts-admin.module';
import { CardProduitMenuComponent } from './components/card-produit-menu/card-produit-menu.component';
import { CardIncrementComponent } from './components/card-increment/card-increment.component';
import { CardMenuTailleComponent } from './components/card-menu-taille/card-menu-taille.component';
import { ListeMenuComponent } from './components/liste-menu/liste-menu.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ProduitsComponent,
    SlideComponent,
    SmdOptionComponent,
    CardComponent,
    DetailBurgerComponent,
    DetailMenuComponent,
    CardProduitComponent,
    CardTailleComponent,
    CardBoissonComponent,
    CardProduitCommandeComponent,
    BoissonsComponent,
    FritesComponent,
    CatalogueComponent,
    CardCheckComponent,
    CardComplementComponent,
    AddMenuComponent,
    CardProduitMenuComponent,
    CardIncrementComponent,
    CardMenuTailleComponent,
    ListeMenuComponent
  ],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    LayoutFrontModule,
    LayoutsAdminModule,
    NgxPaginationModule
  ],
  exports: [
    CardProduitComponent,
    CardProduitCommandeComponent
  ]
})
export class ProduitsModule { }
