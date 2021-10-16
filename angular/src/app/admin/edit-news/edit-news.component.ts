import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product.interface';
import { Product } from 'src/app/interfaces/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-news.component.html',
  styleUrls: ['../add-product/add-product.component.scss']
})
export class EditProductComponent implements OnInit {

  Form: FormGroup;
  imageLink: string;
  productID: number;
  Product:Product;
  constructor(private fb: FormBuilder, private service: ProductService,
    private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

    this.Form =
     this.fb.group({
      title: ['', Validators.required],
      details: [''],
      brand: [''],
      imageLink: [''],
    });

    this.activatedRoute.params.subscribe(param => {
      this.productID = param.id;
      this.loadData(param.id);
    });

  }

  loadData(productId: number) {
    this.service.getProductById(productId).subscribe(product => {
      this.setDataToForm(product);
      this.imageLink = product.imageLink;
    });
  }

  setDataToForm(product: Product) {
    this.Form.setValue({
      title: product.title,
      details: product.details,
      brand: product.brand,
      imageLink: product.imageLink
    });
  }

  submit() {
    if (!this.Form.invalid) {
      
      let product: Product = {
        id: this.productID,
        ...this.Form.value,
       
      };

      this.service.PutProduct(product).subscribe(() => {
        alert('با موفقیت ویرایش شد');
        this.router.navigate(['/admin/product-management']);
      });
    }
  }

}
