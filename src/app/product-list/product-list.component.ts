import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
  imageWidth: number = 40;
  imageMargin: number = 2;
  showImage: boolean = false;
  
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter? this.performFilter(this.listFilter): this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18,2017",
      "description": "15 Gallon Capacity Rolling Garden Cart",
      "price": 32.99,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/download/58471/garden-cart.svg"
    },
    {      
      "productId": 5,
      "productName": "Hammer",
      "productCode": "HMR-0048",
      "releaseDate": "March 21, 2017",
      "description": "Steel Hammer",
      "price": 8.9,
      "starRating": 2.2,
      "imageUrl": "https://openclipart.org/download/193438/freehammer.svg"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit (): void {
    console.log ('In On Init');
  }

  constructor(){
    this.filteredProducts = this.products;
    this.listFilter = "cart";
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product : IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy)!= -1);
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List: ' + message;
  }
}
