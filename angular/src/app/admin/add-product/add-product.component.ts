import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {

  Form: FormGroup;
  imageLink: string = "";

  constructor(private fb: FormBuilder, private service: ProductService) {

  }

  ngOnInit(): void {

    this.Form = this.fb.group({
      title: ['',Validators.required],
      details: [''],
      brand: [''],
      imageLink: [''],
    });

  }

  submit() {

    if(!this.Form.invalid) {
     
      let product: Product = {
        ...this.Form.value,
      };

      this.service.AddProduct(product).subscribe(() => {
        alert('خبر با موفقیت افزوده شد ');
        this.Form.reset();
      });
    }

  }

}
