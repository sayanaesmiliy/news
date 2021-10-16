import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './news-management.component.html',
  styleUrls: ['./news-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'title','brand','imageLink','operation'];
  dataSource: IProduct[] = [];
 
  constructor(private service: ProductService) {

  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.service.getProducts().subscribe(products => {
      setTimeout(() => {
        this.dataSource = products;
      }, 1000);
    });
  }

  deleteProduct(id: number, title: string) {
    let isYes = confirm(`آیا از حذف محصول (${title}) مطمئن هستید؟`);
    if(isYes) {
      this.service.DeleteProduct(id).subscribe(()=> {
        this.loadData();
      });
    }
  }
 

}