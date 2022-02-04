import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../entities/product/product';


@Component({
  selector: 'product-view',
  templateUrl: 'product-view.component.html'
})
export class ProductViewPage implements OnInit {
  constructor() { }
  /**
   * product is the product object that is passed in from the parent component
   */

  @Input() product: Product;

  ngOnInit() { }

}

