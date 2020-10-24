import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomizeProductComponent } from './customize-product/customize-product.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'app-sub-categories',component:SubCategoriesComponent},
  {path:'app-product-details',component:ProductDetailsComponent},
  {path:'customProductsPage',component:CustomizeProductComponent},
  {path:'app-side-nav-bar',component:SideNavBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

