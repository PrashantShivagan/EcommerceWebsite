import { Component, OnInit } from '@angular/core';
import { AppSharedDataService } from '../shared/app-shared-data.service';
//import { $ } from 'protractor';

declare var $: any;

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  mainType:string = "printed";
  genderType:string = "men";
  
  constructor(private appData:AppSharedDataService) { 
    appData.mainType = this.mainType;
    appData.genderType = this.genderType;
  }

  ngOnInit() {
    $(document).ready(function() {


    })
  }

  radioChangeHandler(event: any){
    this.mainType = event.target.value;
    this.appData.changeMainType(this.mainType);
  }

  genderChangeHandler(eve:any){
    this.appData.changeGenderType(eve.target.value);
  }

}
