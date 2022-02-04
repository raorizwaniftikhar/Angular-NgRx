import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from './product';
import { ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCTS_SUCCESS, UPDATE_PRODUCT_SUCCESS } from './product-actions';
// import * as productActions from './product-actions';

export interface ProductState extends EntityState<Product> { }

const productAdapter = createEntityAdapter<Product>();
const productInitialState: ProductState = productAdapter.getInitialState();

// Reducers takes the current state and an action, and returns the new state.
// Here are the product reducers:

export function productReducer(
  state: ProductState = productInitialState,
  action
) {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS:
      return productAdapter.addOne(action.payload, state);
    case GET_PRODUCTS_SUCCESS:
      return productAdapter.addAll(action.payload, state);
    case UPDATE_PRODUCT_SUCCESS:
      return productAdapter.updateOne(action.payload, state);
    case DELETE_PRODUCT_SUCCESS:
      return productAdapter.removeOne(action.payload, state);
    default:
      return state;
  }
}

export const selectProductState = createFeatureSelector<ProductState>('products');
export const { selectAll: selectAllProducts, selectIds } = productAdapter.getSelectors(selectProductState);

export const selectEntity = (id) => createSelector(
  selectProductState,
  (products: ProductState) => products.entities[id]
);