import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { EditProductComponent } from './admin/edit-news/edit-news.component';
import { ProductManagementComponent } from './admin/news-management/news-management.component';
import { AppGuard } from './auth/gurds/app.guard';

import { CartComponent } from './customer/cart/cart.component';
import { CustomerLayoutComponent } from './customer/customer-layout/customer-layout.component';
import { ProductDetailsComponent } from './customer/news-details/news-details.component';
import { ProductListComponent } from './customer/news-list/news-list.component';
import { CustomLoginComponent } from './login/custom-login/custom-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: CustomLoginComponent
  },
  {
    path: 'client', 
    component: CustomerLayoutComponent,
    children:[
      {
        path:'product-list', // localhost:4200
        component: ProductListComponent
      },
      {
        path: 'product',
        redirectTo: 'product/',
        pathMatch: 'full'
      },
      {
        path: 'product/:id', // localhost:4200/product/id
        component: ProductDetailsComponent
      },
      {
        path: 'cart', // localhost:4200/cart
        component: CartComponent
      },
    ]
  },
  {
    path: 'admin', // localhost:4200/admin
    canActivate:[AppGuard],
    component: AdminLayoutComponent,
    children:[
      {
        path:'product-management', // localhost:4200/admin
        component: ProductManagementComponent
      },
      {
        path: 'add-product', // localhost:4200/add-product
        component: AddProductComponent
      },
      {
        path: 'edit-product',
        redirectTo: 'edit-product/',
        pathMatch: 'full'
      },
      {
        path: 'edit-product/:id', // localhost:4200/edit-product/id
        component: EditProductComponent
      }
    ]
  },
  {
    path:'', 
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
