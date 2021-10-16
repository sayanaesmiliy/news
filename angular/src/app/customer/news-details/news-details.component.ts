import { Component, OnInit,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct = {} as IProduct;

  constructor(private service: ProductService,private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  
 
    this.activatedRoute.params.subscribe(param => {
        this.loadData(param.id);
    });

  }

  loadData(productId: number) {
    this.service.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  }


  addToCart(product: IProduct) {
    this.service.AddToCart(product);
  } 
 
}



