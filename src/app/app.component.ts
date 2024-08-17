import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

//import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pageTitle = 'Shopping-cart';

  loading = true;

  constructor(private cartService: CartService) {}

  readonly isLoggedIn = true;

  //cartTotal = this.cartService.cartTotal;
  getCartTotal() {
    const cartTotal = this.cartService.updateCartTotal();
    return cartTotal;
  }
}
