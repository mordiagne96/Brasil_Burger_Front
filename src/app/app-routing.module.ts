import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes =[
      { path: 'securite', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
      { path: '', redirectTo: 'catalogue',pathMatch:"full"}, 
      { path: 'catalogue', loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule) },
      { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
      { path: "**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
