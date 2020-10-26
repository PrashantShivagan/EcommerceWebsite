import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit{

  title :string = "My Shopping Website";
  ngOnInit(){
    
  }
  
  ngAfterViewInit(){
 
  }

  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
  // categoriesArr=["custom_tshirts","custom_huddies","custom_mobilecovers"];
  // subCategory="all";
  // products=[];
  // cartItems=[];
  // cart_n = document.getElementById('cart_n');

  // TSHIRTS=[{name:'Round Neck Tees',price:199},{name:'Tank Tees',price:149},{name:'Dress',price:249},{name:'Dress',price:249},{name:'Dress',price:249}];
  // HUDDIES=[{name:'Round Neck Tees',price:199},{name:'Tank Tees',price:149},{name:'Dress',price:249},{name:'Dress',price:249},{name:'Dress',price:249}];
  // MOBILECOVERS=[{name:'Round Neck Tees',price:199},{name:'Tank Tees',price:149},{name:'Dress',price:249},{name:'Dress',price:249},{name:'Dress',price:249}];

  // ngOnInit(){
    
  // }
  
  // ngAfterViewInit(){
  //   this.render();
  // }

  // HTMLfruitProduct(category:number,con:number){
  //   let URL = `./assets/`+this.categoriesArr[category]+`/`+this.subCategory+`/custom_${con}.jpg`;
  //   console.log("URL = "+URL)
    
  //   let btn = `btnFruits${con}`;

  //   return `
  //     <div class="col-md-4">
  //         <div class="card mb-4 shadow-sm">
  //             <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card Image Cap">
  //                 <div class="card-body">
  //                     <i class="material-icons">star</i>
  //                     <i class="material-icons">star</i>
  //                     <i class="material-icons">star</i>
  //                     <i class="material-icons">star</i>
  //                     <i class="material-icons">star</i>
  //                     <p class="card-text">${this.TSHIRTS[con-1].name}</p>
  //                     <p class="card-text">Price: ${this.TSHIRTS[con-1].price}.00</p>
  //                     <div class="d-flex justify-content-between align-items-center">
  //                         <div class="btn-group">
  //                             <button type="button" class="btn btn-sm btn-outline-secondary" onclick="cart2('${this.TSHIRTS[con-1].name}','${this.TSHIRTS[con-1].price},'${URL}','${con}','${btn}')">Buy</button>
  //                             <button id="${btn}" type="button" class="btn btn-sm btn-outline-secondary" onclick="cart2('${this.TSHIRTS[con-1].name}','${this.TSHIRTS[con-1].price},'${URL}','${con}','${btn}')">Add to cart</button>
  //                         </div>
  //                         <small class="text-muted">Free shipping</small>
  //                     </div>
  //                 </div>
  //         </div>
  //     </div>
  //   `
  // }

  // render(){
  //   for(let i = 0;i<this.categoriesArr.length;i++){
  //     for(let index = 1;index<= 5;index++){
  //      // document.getElementById(this.categoriesArr[i]).innerHTML += `${this.HTMLfruitProduct(i,index)}`
  //     }
  //   }
  // }
}


