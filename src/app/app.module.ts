import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NgxBootstrapConfirmModule } from 'ngx-bootstrap-confirm';
import { NotifierModule } from 'angular-notifier';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    HttpClientModule,
    NgxBootstrapConfirmModule,
    FormsModule,
    NotifierModule,
  
    
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
