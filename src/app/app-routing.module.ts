import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component'
import { CartComponent } from './cart/cart.component';
import {ProductPageComponent } from './product-page/product-page.component'
import { AllProductsComponent } from './all-products/all-products.component';


const routes: Routes = [
  {path: '',component:CarouselComponent},
  {path: 'home',component:CarouselComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'cart',component:CartComponent},
  {path: 'test',component:TestComponent},
  {path: 'product-page/:id',component:ProductPageComponent},
  {path: 'all-products',component:AllProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
