import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './news-management/news-management.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-news/edit-news.component';
import { MaterialModule } from '../material.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FileUploadModule } from "ng2-file-upload";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductManagementComponent,
    AddProductComponent,
    EditProductComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    MaterialModule,
    NgxPaginationModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class AdminModule { }
