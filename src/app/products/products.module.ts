import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsDetailsComponent } from './component/products-details/products-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductsComponent } from './component/products/products.component';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

@NgModule({
  declarations: [ProductsComponent, ProductsDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class ProductsModule {}
