import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSharedDataService {

  productsInCartNum:Number = 0;
  productInCart:any;
  currentProductDetails:any;
  mainType:string;
  genderType:string;
  private typeSubject = new Subject<string>();
  mainType$ = this.typeSubject.asObservable();
  constructor() { }

  changeMainType(type: string) {
    this.typeSubject.next(type);
  }

  changeGenderType(gender: string) {
    this.typeSubject.next(gender);
  }
}
