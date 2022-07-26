import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideComponent } from './components/slide/slide.component';
import { SmdOptionComponent } from './components/smd-option/smd-option.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './components/card/card.component';
import { DetailBurgerComponent } from './components/detail-burger/detail-burger.component';
import { DetailMenuComponent } from './pages/detail-menu/detail-menu.component';
import { PanierComponent } from './pages/panier/panier.component';
import { CardProduitComponent } from './components/card-produit/card-produit.component';
import { CardTailleComponent } from './components/card-taille/card-taille.component';
import { CardBoissonComponent } from './components/card-boisson/card-boisson.component';
import { CardProduitCommandeComponent } from './components/card-produit-commande/card-produit-commande.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BurgersComponent } from './pages/burgers/burgers.component';
import { BoissonsComponent } from './pages/boissons/boissons.component';
import { FritesComponent } from './pages/frites/frites.component';

@NgModule({
  declarations: [
    CatalogueComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,
    SmdOptionComponent,
    CardComponent,
    DetailBurgerComponent,
    DetailMenuComponent,
    PanierComponent,
    CardProduitComponent,
    CardTailleComponent,
    CardBoissonComponent,
    CardProduitCommandeComponent,
    MenuComponent,
    BurgersComponent,
    BoissonsComponent,
    FritesComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CatalogueModule { }
