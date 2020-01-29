import { CheckoutComponent } from './checkout/checkout.component';
import { CartviewComponent } from './cartview/cartview.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AboutComponent } from './about/about.component';
import { FilenotfoundComponent } from './filenotfound/filenotfound.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'products/:id',component:ProductsComponent},
  {path:'productdetails/:id',component:ProductdetailsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cartView',component:CartviewComponent},
  {path:'home',component: CategoryComponent},
  {path:'about',component:AboutComponent},
  {path:'',component:CategoryComponent},
  {path:'**',component:FilenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
