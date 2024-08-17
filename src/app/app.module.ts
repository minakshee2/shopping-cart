import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './core/components/home/home.component';
import { SideNavComponent } from './core/components/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BreadComponent } from './components/bread/bread.component';
import { MatCardModule } from '@angular/material/card';

import { ProductService } from '../app/services/product.service';
import { CartService } from './services/cart.service';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

//import {  MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    SideNavComponent,
    BreadComponent,
    ViewCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatTooltipModule,
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
