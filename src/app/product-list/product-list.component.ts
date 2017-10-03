import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 40;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  products: any[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18,2017",
      "description": "15 Gallon Capacity Rolling Garden Cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://openclipart.org/download/58471/garden-cart.svg"
    },
    {      
      "productId": 5,
      "productName": "Hammer",
      "productCode": "HMR-0048",
      "releaseDate": "March 21, 2017",
      "description": "Steel Hammer",
      "price": 8.9,
      "starRating": 4.28,
      "imageUrl": "https://openclipart.org/download/193438/freehammer.svg"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
