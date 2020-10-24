import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ImageSlideBannerComponent } from './image-slide-banner/image-slide-banner.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { HomeComponent } from './home/home.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomizeProductComponent } from './customize-product/customize-product.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {OwlModule} from 'ngx-owl-carousel';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ImageSlideBannerComponent,
    TopNavigationComponent,
    ProductFilterComponent,
    HomeComponent,
    SubCategoriesComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    CustomizeProductComponent,
    SideNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    OwlModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas :  [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
