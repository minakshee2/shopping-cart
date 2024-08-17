import { Injectable } from '@angular/core';
import { Product } from '../product-items.model';
import { products } from '../../app/product-items';

@Injectable()
export class ProductService {
  getAll(): Product[] {
    return products; // this you calling BE, getting from DB
  }

  // getCategories() {

  // }

  getCategoryItems(id: number | undefined): Product[] {
    return products.filter(item => item.categoryId == id);
  }

  getSelectedCategoryItems(categoryId: number, id: number): Product | null {
    return products.find(item => item.categoryId == categoryId && item.id == id) || null;
  }
}
