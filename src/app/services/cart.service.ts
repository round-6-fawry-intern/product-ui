import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../types'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems);

  getCart() {
    return this.cartItemsSubject.asObservable(); // Return an Observable of Product[]
  }

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartItemsSubject.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }
}
