import { Injectable } from '@angular/core';
import { Product } from '../product-items.model';
import { ProductService } from './product.service';

@Injectable()
export class CartService {
  constructor(private productService: ProductService) {}

  counter = 0;
  public cartItems: Product[] = [];
  index = 0;

  cartTotal = 0;
  total = 0;

  addToCart(categoryId: number, id: number) {
    const item = this.cartItems.find(
      category => categoryId == category.categoryId && id == category.id
    );
    if (!item) {
      const selectedItem = this.productService.getSelectedCategoryItems(categoryId, id);
      if (selectedItem) {
        this.cartItems.push(selectedItem);
        selectedItem.qtySelected = 1;
        selectedItem.total = selectedItem.qtySelected * selectedItem.price;
        this.updateCartTotal();
      }
    } else {
      item.qtySelected = (item.qtySelected || 0) + 1;
      item.total = item.qtySelected * item.price;
      this.updateCartTotal();
    }
  }

  removeFromCart(categoryId: number, id: number) {
    const item = this.cartItems.find(
      category => categoryId == category.categoryId && id == category.id
    );
    if (item) {
      item.qtySelected = (item.qtySelected || 0) - 1;
      item.total = item.qtySelected * item.price;

      //const qty = item.qtySelected || 0;
      if (item.qtySelected === 0) {
        const index = this.cartItems.findIndex(
          category => categoryId == category.categoryId && id == category.id
        );
        console.log('index', index);
        this.cartItems.splice(index, 1);
      }
    }
    this.updateCartTotal();
  }

  deleteFromCart(categoryId: number, id: number) {
    const index = this.cartItems.findIndex(
      category => categoryId == category.categoryId && id == category.id
    );
    this.cartItems.splice(index, 1);
    this.updateCartTotal();
    // console.log('cart', this.cartItems);
  }

  updateCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(el => (this.cartTotal += el.qtySelected || 0));

    return this.cartTotal;
  }

  getSummary(type: string) {
    this.total = 0;

    if (type === 'qty') {
      this.cartItems.forEach(el => (this.total += el.qtySelected || 0));
    } else if (type === 'total') {
      this.cartItems.forEach(el => (this.total += el.total || 0));
    }
    return this.total;
  }
}

// import { Injectable } from '@angular/core';
// //import {Product,CartProduct} from './../types/Products';
// import { Subject }    from 'rxjs';

// @Injectable()
// export class CartService {

//   private cartUpdates = new Subject<string>();
//   public cartUpdates$ = this.cartUpdates.asObservable();

//   public cartItmes:CartProduct[] =[];
//   public get count():number{
//     return this.cartItmes.reduce((c,t1) => t1.qty+c,0);

//   };

//   constructor() {

//   }

//   add(product:Product){

//    let item:CartProduct = this.cartItmes.find(item => item.id == product.id) as CartProduct ;

//    if(item){ item.qty ++ } else {
//      (product as CartProduct).qty = 1;
//      this.cartItmes.push(product)
//    }

//    //this.cartUpdates.next();
//    //test

//   }

// }
