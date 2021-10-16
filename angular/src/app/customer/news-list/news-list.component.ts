import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from 'src/app/interfaces/product.interface';
import {ProductService} from 'src/app/services/product.service';
import {Observable, of} from "rxjs";
import {PageEvent} from '@angular/material/paginator';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list ',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
}) 

export class ProductListComponent implements OnInit {

  products: IProduct[] = [];
  pageEvent: PageEvent;
  


  constructor(private service: ProductService) {
  }

  ngOnInit(): void {
   this.loadData();
    
  }

  loadData() {
  
     this.service.getProducts()
     .pipe(
       map(
         res => {
           console.log(res);
           this.products = res;
          }
       ),
       catchError(
         xhr =>{
           console.error(xhr);
           return of([]);
         })
     ).subscribe();
  }



 

  addToCart(product: IProduct) {
    this.service.AddToCart(product);
  }
  
  deleteProduct(id: number) {
    let isYes = confirm(`آیا از حذف محصول  مطمئن هستید؟`);
    if(isYes) {
      this.service.DeleteProduct(id).subscribe(()=> {
        this.loadData();
      });
    }
  }
  
}

 