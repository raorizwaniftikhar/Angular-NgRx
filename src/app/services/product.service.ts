import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@app/entities/product/product';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// injectable decorator
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // URL to web api
  private productsUrl = '/products';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET products from the server */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(products => this.log(`fetched products`)),
        catchError(this.handleError('getProducts', []))
      );
  }
  /** GET product by id. Will 404 if id not found */
  // getProduct(id): Observable<Product> {
  //   const url = `${this.productsUrl}/${id}`;
  //   return this.http.get<Product>(url).pipe(
  //     tap(_ => this.log(`fetched product id=${id}`)),
  //     catchError(this.handleError<Product>(`getProduct id=${id}`))
  //   );
  // }

  /** POST: add a new product to the server */
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, httpOptions).pipe(
      tap((product: Product) => this.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  /** DELETE: delete the product from the server */
  deleteProduct(product: Product): Observable<number> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;
    this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
    return of(parseInt(id));
  }

  /** PUT: update the product on the server */
  updateProduct(product: Product): Observable<any> {
    this.http.put(this.productsUrl, product, httpOptions).pipe(
      tap(_ => this.log(`updated product id=${product.id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
    return of(product);
  }

  getProduct(id): Observable<Product> {
    return this.http.get('/products/' + id) as Observable<Product>;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ProductService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ProductService: ' + message);
  }
}
