import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'frontend';
  value: string = 'testando';
  products: [] = [{
    "id": '1000',
    "code": 'f230fh0g3',
    "name": 'Bamboo Watch',
    "description": 'Product Description',
    "image": 'bamboo-watch.jpg',
    "price": 65,
    "category": 'Accessories',
    "quantity": 24,
    "inventoryStatus": 'INSTOCK',
    "rating": 5
  }
  ]
}
