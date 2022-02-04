import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@core/core.module';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './entities/product/product-reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('products', productReducer),
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
