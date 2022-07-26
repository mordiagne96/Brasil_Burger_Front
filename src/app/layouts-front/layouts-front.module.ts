import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsFrontRoutingModule } from './layouts-front-routing.module';
import { LayoutsFrontComponent } from './layouts-front.component';


@NgModule({
  declarations: [
    LayoutsFrontComponent
  ],
  imports: [
    CommonModule,
    LayoutsFrontRoutingModule
  ]
})
export class LayoutsFrontModule { }
