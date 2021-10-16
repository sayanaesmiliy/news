import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts: IProduct[] = [];

  constructor(private service: ProductService) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.cart.subscribe(products => {
    this.cartProducts = 
      products;this.cartProducts.forEach(p => { }
      
      )
   })
  }


  removeFromCart(product: IProduct) {

    this.service.RemoveFromCart(product);
  }

}
