import { Component, inject } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ProductComponent, CommonModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  htpp = inject(HttpClient);
  products: Product[] = [];

  ngOnInit() {
    this.htpp.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data: Product[]) => {
        this.products = data;
    });
  }
}
