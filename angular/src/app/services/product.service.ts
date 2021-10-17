import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../interfaces/product.interface';
import { environment } from 'src/environments/environment';
import { tap } from "rxjs/operators";
import { Product } from '../interfaces/product.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {


  apiBaseUrl: string = environment.API_Base_URL
  cart = new BehaviorSubject<IProduct[]>([]);
  products: IProduct[] = [];
  Product: Product;
  httpHeaders: HttpHeaders = new HttpHeaders();
  headers: HttpHeaders | { [header: string]: string | string[]; };
  constructor(private httpClient: HttpClient) {
    this.httpHeaders = this.httpHeaders.set('Content-type', 'application/json;charset=UTF-8');
  }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.apiBaseUrl + '/api/products', { headers: this.headers }).pipe();
  }

  getProductById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(this.apiBaseUrl + `/api/products/${id}`, { headers: this.headers });
  }

  AddProduct(product: Product): Observable<void> {
    // 
    return this.httpClient.post<void>(this.apiBaseUrl + '/api/products', product, { headers: this.headers });
  }

  DeleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiBaseUrl + `/api/products/${id}`, { headers: this.headers });
  }

  PutProduct(product: Product): Observable<void> {
    return this.httpClient.put<void>(this.apiBaseUrl + `/api/products/${product.id}`, product, { headers: this.headers });
  }

  AddToCart(product: IProduct): void {
    this.products.push(product);
    this.cart.next(this.products);


  }

  RemoveFromCart(product: IProduct): void {

    this.products.splice(this.products.findIndex(p => p.id == product.id), 1);
    this.cart.next(this.products);
  }


}
