import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFrontComponent } from './layout-front.component';

const routes: Routes = [
  { path: '', component: LayoutFrontComponent },
  { path: '', component: LayoutFrontComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutFrontRoutingModule { }
