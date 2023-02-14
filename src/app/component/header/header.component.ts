import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { ProductCart } from 'src/app/products/model/productsCart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  public products: ProductCart[] = [];
  public iconMenuResponsive: boolean = false;
  public animationItensMenuResponsive: boolean = false;
  public openDropDown: boolean = false;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
      this.products = res;
    });
  }

  openMenu() {
    this.animationItensMenuResponsive = !this.animationItensMenuResponsive;
    this.iconMenuResponsive = !this.iconMenuResponsive;
  }

  dropDown() {
    this.openDropDown = !this.openDropDown;
  }
}
