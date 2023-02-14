import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/products.service';
import { ProductCart } from '../../model/productsCart';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  public product!: ProductCart;
  public id: string | null = null;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProductsById(id).subscribe((res) => {
      this.product = res;
    });
  }

  addtocart(item: ProductCart) {
    this.cartService.addToCart(item);
  }
}
