import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutFrontRoutingModule } from './layout-front-routing.module';
import { LayoutFrontComponent } from './layout-front.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PanierLogoComponent } from './components/panier-logo/panier-logo.component';


@NgModule({
  declarations: [
    LayoutFrontComponent,
    HeaderComponent,
    FooterComponent,
    PanierLogoComponent
  ],
  imports: [
    CommonModule,
    LayoutFrontRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PanierLogoComponent
  ]
})
export class LayoutFrontModule { }
