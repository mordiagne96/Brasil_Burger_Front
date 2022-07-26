import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsFrontComponent } from './layouts-front.component';

const routes: Routes = [{ path: '', component: LayoutsFrontComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsFrontRoutingModule { }
