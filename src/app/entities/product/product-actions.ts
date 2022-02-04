import { Action } from '@ngrx/store';
import { Product } from './product';



// Actions are the only way to mutate the state in the store.
// And Here are the actions used to mutate the state:


export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: Product) { }
}

export class AddProductSuccess implements Action {
  readonly type = ADD_PRODUCT_SUCCESS;
  constructor(public payload: Product) { }
}

export class GetProducts implements Action {
  readonly type = GET_PRODUCTS;
}

export class GetProductsSuccess implements Action {
  readonly type = GET_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) { }
}

export class UpdateProduct implements Action {
  readonly type = UPDATE_PRODUCT;
  constructor(public payload: Product) { }
}

export class UpdateProductSuccess implements Action {
  readonly type = UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: Product) { }
}

export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;
  constructor(public payload: Product) { }
}

export class DeleteProductSuccess implements Action {
  readonly type = DELETE_PRODUCT_SUCCESS;
  constructor(public payload: number) { }
}

export class GetProduct implements Action {
  readonly type = GET_PRODUCT;
  constructor(public productId) { }
}

export class GetProductSuccess implements Action {
  readonly type = GET_PRODUCTS_SUCCESS;
  constructor(public payload: Product) { }
}

export type ProductActions
  = AddProduct
  | AddProductSuccess
  | GetProducts
  | GetProductsSuccess
  | UpdateProduct
  | UpdateProductSuccess
  | DeleteProduct
  | DeleteProductSuccess
  | GetProduct
  | GetProductSuccess;
