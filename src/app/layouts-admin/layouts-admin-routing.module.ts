import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsAdminComponent } from './layouts-admin.component';

const routes: Routes = [{ path: '', component: LayoutsAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsAdminRoutingModule { }
