import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { Product } from 'src/app/products/model/product';
import { ProductCart } from 'src/app/products/model/productsCart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public quantity!: number;
  public products: ProductCart[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  removeItem(item: ProductCart) {
    this.cartService.removeCartItem(item);
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }
}
