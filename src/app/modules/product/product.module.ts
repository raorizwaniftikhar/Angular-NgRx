import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPage } from '@product/pages/product/product.page';
import { SharedModule } from '@shared/shared.module';
import { ProductViewPage } from './dump-compnent/product-view.compnent';


export const productRoutes: Routes = [
  {
    path: ':productId',
    component: ProductPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(productRoutes),
  ],
  declarations: [
    ProductPage,
    ProductViewPage
  ]
})
export class ProductModule {
}
