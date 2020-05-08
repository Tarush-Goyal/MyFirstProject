import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './header/search/search.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MaterialModule } from './material.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from  '@ngx-gallery/lightbox';
import { GallerizeModule } from  '@ngx-gallery/gallerize';
import { TestComponent } from './test/test.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AllProductsComponent } from './all-products/all-products.component';
import { UserDetailsComponent } from './header/user-details/user-details.component';




@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CartComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    SidenavComponent,
    ShoppingCartComponent,
    ProductPageComponent,
    NavMenuComponent,
    TestComponent,
    AllProductsComponent,
    UserDetailsComponent,


  ],
  imports: [

    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCarouselModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    LazyLoadImageModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
