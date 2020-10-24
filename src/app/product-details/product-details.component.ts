import { Component, OnInit } from '@angular/core';
import { AppSharedDataService } from '../shared/app-shared-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct:any;

  starCountArr = [1,2,3,4];
  constructor(private appData:AppSharedDataService) {
    this.currentProduct = appData.currentProductDetails;
   }

  ngOnInit() {
  }

}
