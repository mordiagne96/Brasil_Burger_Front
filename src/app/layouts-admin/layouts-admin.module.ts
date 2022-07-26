import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsAdminRoutingModule } from './layouts-admin-routing.module';
import { LayoutsAdminComponent } from './layouts-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';


@NgModule({
  declarations: [
    LayoutsAdminComponent,
    HeaderComponent,
    SlideBarComponent
  ],
  imports: [
    CommonModule,
    LayoutsAdminRoutingModule
  ],
  exports: [
    HeaderComponent,
    SlideBarComponent
  ]
})
export class LayoutsAdminModule { }
