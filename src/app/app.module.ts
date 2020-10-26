import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ImageSlideBannerComponent } from './image-slide-banner/image-slide-banner.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomizeProductComponent } from './customize-product/customize-product.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {OwlModule} from 'ngx-owl-carousel';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {RegisterComponent} from './register'



@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    HomeComponent,
    ImageSlideBannerComponent,
    SideNavBarComponent,
    ProductFilterComponent,
    SubCategoriesComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    CustomizeProductComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    BrowserAnimationsModule,
    OwlModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas :  [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
