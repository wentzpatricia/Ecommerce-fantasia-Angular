import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailsComponent } from './component/products-details/products-details.component';
import { ProductsComponent } from 'src/app/products/component/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },

  {
    path: ':id',
    component: ProductsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
