import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component'
import { CartComponent } from './cart/cart.component';
import {ProductPageComponent } from './product-page/product-page.component'
import { AllProductsComponent } from './all-products/all-products.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '',component:HomeComponent},
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
