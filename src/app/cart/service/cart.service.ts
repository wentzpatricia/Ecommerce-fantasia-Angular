import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductCart } from 'src/app/products/model/productsCart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: ProductCart[] = [];
  public productList = new BehaviorSubject<ProductCart[]>([]);

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: ProductCart[]) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: ProductCart) {
    const productAlreadyExistsInCart = this.cartItemList.findIndex(
      (item) => item.id === product.id
    );

    if (productAlreadyExistsInCart !== -1) {
      this.cartItemList[productAlreadyExistsInCart].quantity++;

      this.productList.next(this.cartItemList);
      return;
    }
    this.cartItemList.push({ ...product, quantity: 1 });
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal = 0;

    this.cartItemList.map((product) => {
      grandTotal += product.price * product.quantity;
    });
    return grandTotal;
  }

  removeCartItem(product: ProductCart) {
    this.cartItemList.map((productCart, index: number) => {
      if (product.id === productCart.id && product.quantity >= 0) {
        product.quantity -= 1;
        if (product.quantity === 0) {
          this.cartItemList.splice(index, 1);
        }
      }
    });
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
