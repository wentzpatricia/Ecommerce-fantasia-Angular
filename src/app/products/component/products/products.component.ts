import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { ProductService } from '../../service/products.service';
import { ProductCart } from '../../model/productsCart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: ProductCart[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
  addtocart(item: ProductCart) {
    this.cartService.addToCart(item);
  }
}
