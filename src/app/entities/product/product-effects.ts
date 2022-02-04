import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ofAction } from 'ngrx-actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { MessageService } from '../../services/message.service';
import { ProductService } from '../../services/product.service';
import { Product } from './product';
import { AddProduct, AddProductSuccess, DeleteProduct, DeleteProductSuccess, GetProduct, GetProducts, GetProductsSuccess, GetProductSuccess, UpdateProduct, UpdateProductSuccess } from './product-actions';

@Injectable()
export class ProductEffects {
  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private productService: ProductService,
    private messageService: MessageService) { }

// Effects are a way to handle asynchronous actions in your application.
// They are a way to handle actions that are dispatched from the UI,
// Added by the effects.ts file in the src/app/entities/product/product-effects.ts file.
// This contains the effects for the product actions.

  @Effect()
  addProduct$ = this.actions$.pipe(
    ofAction(AddProduct),
    switchMap((product: any) => this.productService.addProduct(product.payload)),
    map((response: Product) => {
      this.messageService.add("Adding product to the store.");
      return new AddProductSuccess(response);
    }, catchError(error => error.subscribe().switchMap(error => {
      console.log(error)
    }))
  ));

  @Effect()
  getProducts$ = this.actions$.pipe(
    ofAction(GetProducts),
    switchMap(() => this.productService.getAllProducts()),
    tap(() => console.log("Hello")),
    map((response: Product[]) => {
      this.messageService.add("Populating store with products.");
      return new GetProductsSuccess(response);
    }));

  @Effect()
  getProduct$ = this.actions$.pipe(
    ofAction(GetProduct),
    switchMap(productId => this.productService.getProduct(productId)),
    map((response: Product) => {
      this.messageService.add("Get product based on id.");
      return new GetProductSuccess(response);
    }));

  @Effect()
  updateProduct$ = this.actions$.pipe(
    ofAction(UpdateProduct),
    switchMap((product: any) => this.productService.updateProduct(product.payload)),
    map((response: Product) => {
      this.messageService.add("Updating product in the store.");
      return new UpdateProductSuccess(response);
    }));

  @Effect()
  deleteProduct$ = this.actions$.pipe(
    ofAction(DeleteProduct),
    switchMap((product: any) => this.productService.deleteProduct(product.payload)),
    map(response => {
      this.messageService.add("Deleting product in the store.");
      return new DeleteProductSuccess(response);
    }));
}
