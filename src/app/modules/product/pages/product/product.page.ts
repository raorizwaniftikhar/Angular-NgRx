import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { selectEntity } from '@app/entities/product/product-reducer';
import { ProductService } from '@app/services/product.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../../../entities/product/product';


@Component({
  selector: 'product-page',
  templateUrl: 'product.page.html'
})
export class ProductPage implements OnInit {

  /**
      If you haven't already, I highly suggest reading the README.md
  */

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private store: Store<any>) { }
  product$: Observable<Product>;

  ngOnInit() {
    /** 
     * Retrieve the productId from the route and get the product based on the productId
     */

    this.activatedRoute.paramMap.subscribe(params => {
      const productId = params.get('productId');
      this.product$ = this.store.pipe(select(selectEntity(productId)));
      this.product$ = this.productService.getProduct(productId)
    });
  }

}



