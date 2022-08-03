import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsAdminRoutingModule } from './layouts-admin-routing.module';
import { LayoutsAdminComponent } from './layouts-admin.component';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    LayoutsAdminComponent,
    SlideBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutsAdminRoutingModule
  ],
  exports: [
    SlideBarComponent
  ]
})
export class LayoutsAdminModule { }
