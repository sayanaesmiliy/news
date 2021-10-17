import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Role } from 'src/app/models/types';
import { User } from 'src/app/models/user';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})
export class CustomerLayoutComponent implements OnInit, OnDestroy {

  panelOpenState = false;
  cartProductsLength: number;
  role: Role = "ADMIN";
  subsribe = new Subscription();
  constructor(private authService: AuthService, private service:ProductService, private router: Router) {    
    this.subsribe = authService.currentUser$.subscribe((user) => {
      this.role = user.role;
    })
  }

  ngOnInit(): void {
    this.loadData();

  }


  ngOnDestroy(): void {
    this.subsribe.unsubscribe();
  }



  loadData() {    
    this.service.cart.subscribe(products => {
      this.cartProductsLength = products.length;
    });
  }  
  
  logout() {
    this.authService.logout();    
    this.router.navigate(['/login']);
  }
}


