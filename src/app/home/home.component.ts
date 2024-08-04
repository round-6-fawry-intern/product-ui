import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { PaginationsParams, Product, Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  first: number = 1;
  rows: number = 5;
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  totalRecords = 0;

  ngOnInit() {
    this.fetchProducts(this.first, this.rows);
  }
  onProductOutput(product: Product) {
    console.log(product, 'outputttttttttttttt');
  }

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  fetchProducts(page: number, perPage: number) {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page, perPage })
      .subscribe((products) => {
        this.products = products.items;
        this.totalRecords = products.totalPages;
      });
  }
}
