import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanierRoutingModule } from './panier-routing.module';
import { PanierComponent } from './panier.component';
import { LayoutFrontModule } from '../layout-front/layout-front.module';
import { ProduitsModule } from '../produits/produits.module';


@NgModule({
  declarations: [
    PanierComponent
  ],
  imports: [
    CommonModule,
    PanierRoutingModule,
    ProduitsModule,
    LayoutFrontModule
  ]
})
export class PanierModule { }
