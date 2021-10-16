import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ProductListComponent } from './news-list/news-list.component';
import { ProductDetailsComponent } from './news-details/news-details.component';
import { CartComponent } from './cart/cart.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    CustomerLayoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    MaterialModule,
    MatPaginatorModule,
    MatIconModule, 
    MatMenuModule,
    MatExpansionModule,
  ],
  exports:[
    CustomerLayoutComponent
  ]
}) 

export class CustomerModule { }

