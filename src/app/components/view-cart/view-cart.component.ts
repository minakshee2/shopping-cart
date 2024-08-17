import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../../product-items.model';
import { CartService } from '../../services/cart.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.css',
})
export class ViewCartComponent {
  //viewCartItems  : Product[] = [];

  constructor(private cartService: CartService) {}

  displayedColumns: string[] = ['name', 'qtySelected', 'price', 'total', 'btn'];

  @ViewChild('table') table: MatTable<ElementRef> | undefined;

  // @ViewChildren('rows') tableRows: QueryList<any> | undefined;
  // @ViewChildren('tableRows', { read: ElementRef }) tableRows: QueryList<ElementRef> | undefined;
  //@ViewChildren('tableRows') btnlinks: QueryList<ElementRef> | undefined;

  viewCartItems = this.cartService.cartItems;
  dataSource = this.viewCartItems;
  isEditClicked = false;
  editItemCategoryId = 0;
  editItemId = 0;

  deleteFromCart(cartItem: Product) {
    this.cartService.deleteFromCart(cartItem?.categoryId, cartItem?.id);
    if (this.table) {
      this.table.renderRows();
    }
  }

  removeFromCart(cartItem: Product) {
    this.cartService.removeFromCart(cartItem?.categoryId, cartItem?.id);
  }
  addToCart(cartItem: Product) {
    if (cartItem) {
      this.cartService.addToCart(cartItem?.categoryId, cartItem?.id);
    }
  }

  isEditSelected(cartItem: Product) {
    this.isEditClicked = true;
    this.editItemCategoryId = cartItem.categoryId;
    this.editItemId = cartItem.id;
    return true;
    // this.tableRows?.forEach(p => console.log(p.nativeElement));
    // this.tableRows?.forEach(row => {
    //   if (row.nativeElement.dataset.rowuniqueid === cartItem.id) {
    //     this.isEditClicked = true;
    //     console.log('passsssssssssssssssssssssssssss');
    //   }
    //   // row.nativeElement.classList.add('hide')
    //   row.nativeElement.firstChild.classList.add('colr');
    // });
  }

  getSummary(type: string) {
    return this.cartService.getSummary(type);
  }

  getDeliveryCharges() {
    if (this.getSummary('total') > 100) {
      return 'FREE';
    } else {
      return 10;
    }
  }

  getTaxCharges() {
    return this.getSummary('total') * 0.13;
  }

  getCartSummary(type: string) {
    if (type === 'delivery') {
      if (this.getSummary('total') > 100) {
        return 0;
      } else {
        return 10;
      }
    }
    return 0;
  }
}
