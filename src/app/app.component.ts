import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetProducts } from './entities/product/product-actions';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works!';
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new GetProducts);
  }
}
