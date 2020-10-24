import { Component, OnInit } from '@angular/core';
import { AppSharedDataService } from '..//shared/app-shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  starCountArr = [1,2,3,4,5];
  subscription: Subscription;
  changedType:string="printed";
  
  productListObjArr = [
    {
      product_name:'RoundNeck T-shirts',
      product_img:'/assets/custom_tshirts/all/men_roundneck_1.jpg',
      product_id:'prod_1',
      product_ratings:'4',
      product_price:'900',
      custom_img:'/assets/custom_tshirts/all/men_roundneck_1_custom.png',
      mainType:'customised',
      gender:'men'
    },
    {
      product_name:'RoundNeck T-shirts',
      product_img:'/assets/custom_tshirts/all/men_roundneck_2.jpg',
      product_id:'prod_2',
      product_ratings:'4',
      product_price:'200',
      mainType:'printed',
      gender:'women'
    },
    {
      product_name:'RoundNeck T-shirts',
      product_img:'/assets/custom_tshirts/all/men_roundneck_3.jpg',
      product_id:'prod_3',
      product_ratings:'4',
      product_price:'200',
      mainType:'customised',
      gender:'men'
    },
    {
      product_name:'RoundNeck T-shirts',
      product_img:'/assets/custom_tshirts/all/men_roundneck_4.jpg',
      product_id:'prod_4',
      product_ratings:'4',
      product_price:'200',
      mainType:'printed',
      gender:'women'
    },
    {
      product_name:'RoundNeck T-shirts',
      product_img:'/assets/custom_tshirts/all/men_roundneck_5.jpg',
      product_id:'prod_5',
      product_ratings:'4',
      product_price:'200',
      mainType:'customised',
      gender:'men'
    },
    {
      product_name:'RoundNeck T-shirts',
      product_img:'/assets/custom_tshirts/all/men_roundneck_6.jpg',
      product_id:'prod_6',
      product_ratings:'4',
      product_price:'200',
      mainType:'printed',
      gender:'women'
    },
    {
      product_name:'RoundNeck T-shirts',
      product_img:'/assets/custom_tshirts/all/men_roundneck_7.jpg',
      product_id:'prod_7',
      product_ratings:'4',
      product_price:'200',
      mainType:'customised',
      gender:'men'
    },
    {
      product_name:'RoundNeck T-shirts',
      product_img:'/assets/custom_tshirts/all/men_roundneck_8.jpg',
      product_id:'prod_8',
      product_ratings:'4',
      product_price:'200',
      mainType:'printed',
      gender:'men'
    },
    {
      product_name:'RoundNeck T-shirts',
      product_img:'/assets/custom_tshirts/all/men_roundneck_8.jpg',
      product_id:'prod_8',
      product_ratings:'4',
      product_price:'200',
      mainType:'printed',
      gender:'men'
    }
  ]
  constructor(private appData:AppSharedDataService) {
    this.cartNum = appData.productsInCartNum;
    this.mainType = appData.mainType;
    this.genderType = appData.genderType;
    console.log("this.mainType = "+this .mainType);

    this.subscription = appData.mainType$.subscribe(
      res=>{
        console.log("subscribe successfully  "+res);

        

        if(res === "printed" || res === "customised"){
          this.mainType = res;
        }else{
          this.genderType = res;
        }
      }
    )
   }
  cartNum:any;
  mainType:string;
  genderType:string;
  ngOnInit() {

  }

  AddToCart(product:any){
    //console.log("Added To Cart  "+product.product_id);
    if(document.getElementById(product.product_id).innerHTML != "Added"){
      this.cartNum++;
      this.appData.productInCart = product;
      this.appData.productsInCartNum = this.cartNum;
      document.getElementById(product.product_id).innerHTML = "Added";
    }
    
    //document.getElementById(product.product_id).
    //$(product.product_id).addClass('class');
  }

  showProdDetail(product:any){
    this.appData.currentProductDetails = product;
  }

  openCustomProd(product:any){
    this.appData.currentProductDetails = product;
  }
}
