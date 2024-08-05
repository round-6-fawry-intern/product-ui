import { Component, OnInit } from '@angular/core';
import { Product } from '../../../types';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [CommonModule],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((items) => {
      this.cartItems = items;
      this.cartItemCount = items.length; // Access length here
    });
  }

  closeCart() {
    // Implement the logic to close the cart (e.g., hide the modal)
  }
}
