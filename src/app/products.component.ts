import { Component } from "@angular/core";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  productName = 'A Book';
  isDisabled = true;
  products = ['A Boot', 'A Tree'];


  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  onAddProduct() {
    if (this.productName) {
      this.products.push(this.productName);
    }
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }
}
