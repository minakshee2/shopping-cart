import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../productCategory.model';
import { Product } from '../../product-items.model';
import { ProductService } from '../../services/product.service';
import { productCategory } from '../../productCategory';
import { CartService } from '../../services/cart.service';
//import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrl: './bread.component.css',
})
export class BreadComponent implements OnInit {
  productCategory: ProductCategory[] = []; // declaration
  //product: Product[]=[];
  selectedCategory = 1;
  public selectedCatList: Product[] = [];
  //qty = 0;
  isAddToCartActive = false;
  count = 0;
  clickedButtonIndex: number | null = null;
  qtySelected = 0;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productCategory = productCategory;
  }

  getProducts(id: number) {
    if (id == 1) {
      this.getAll();
    } else {
      this.getCategoryItems(id);
    }
  }

  getAll() {
    this.selectedCatList = [];
    this.selectedCatList = this.productService.getAll();
    
  }

  getCategoryItems(id: number) {
    this.selectedCatList = [];
    this.selectedCatList = this.productService.getCategoryItems(id);
    
  }

  getPrice(categoryId: number | undefined, subCategoryId: number | undefined) {
    const category = this.selectedCatList.find(
      (category) =>
        categoryId == category.categoryId && subCategoryId == category.id
    );
    return category?.price;
  }

  getQty(categoryId: number | undefined, subCategoryId: number | undefined) {
    const category = this.selectedCatList.find(
      (category) =>
        categoryId == category.categoryId && subCategoryId == category.id
    );
    return category?.qtyAvailable;
  }

  getImage(categoryId: number | undefined, subCategoryId: number | undefined) {
    const category = this.selectedCatList.find(
      (category) =>
        categoryId == category.categoryId && subCategoryId == category.id
    );
    return category?.imageSource;
  }

  removeFromCart(cartItem: Product) {
   
    this.cartService.removeFromCart(cartItem?.categoryId, cartItem?.id);
  }
  addToCart(cartItem: Product) {
    if (cartItem) {
       this.cartService.addToCart(cartItem?.categoryId, cartItem?.id);
    }
  }

  // addToCartActive(index: number) {
  //   this.count++;
  //   this.cartService.counter++;
  //   this.isAddToCartActive = true;
  //   this.clickedButtonIndex = index;
  // }

  resetAll(){
    this.qtySelected = 0;
    this.isAddToCartActive = false;
  }

  getSelectedQty(categoryId: number , subCategoryId: number ){
    this.resetAll();
    this.qtySelected = this.cartService.cartItems.find((category) =>categoryId == category.categoryId && subCategoryId == category.id)?.qtySelected || 0 ;
    
    if(this.qtySelected){
     // console.log("qty",this.qtySelected);
      this.isAddToCartActive = true;
    }
    //console.log("isAddToCartActive",this.isAddToCartActive);
  }


  // private addToCart(bread:BreadCategory) : void{
  //     //this.cartService.add(bread);
  //  }
}


// addToCart(cartItem: Product) {
//   if (cartItem) {
//     this.count++;
//     this.cartService.counter++;
   
//     this.cartService.addToCart(cartItem?.categoryId, cartItem?.id);
//   }
// }

// addToCartActive(index: number) {
//   this.count++;
//   this.cartService.counter++;
//   this.isAddToCartActive = true;
//   this.clickedButtonIndex = index;
// }