import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';
import { SideNavComponent } from './core/components/side-nav/side-nav.component';
import { BreadComponent } from './components/bread/bread.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';

const Routes = [
  {
    path: '',
    component: SideNavComponent,
    children: [
      {
        path: 'login', // child route path
        component: LoginComponent, // child route component that the router renders
      },
      {
        path: 'register',
        component: RegisterComponent, // another child route component that the router renders
      },
      //{ path: 'category/:id', component: ProductListComponent },
    ],
  },
];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'categories', component: BreadComponent },
  { path: 'viewcart', component: ViewCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
