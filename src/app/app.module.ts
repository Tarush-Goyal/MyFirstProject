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
import { UserComponent } from './user/user.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MaterialModule } from './material.module';
import { MenuComponent } from './menu/menu.component';
import { BooksMenuComponent } from './menu/books-menu/books-menu.component';
import { FashionMenuComponent } from './menu/fashion-menu/fashion-menu.component';
import { FurnitureMenuComponent } from './menu/furniture-menu/furniture-menu.component';
import { OutdoorMenuComponent } from './menu/outdoor-menu/outdoor-menu.component';
import { GroceriesMenuComponent } from './menu/groceries-menu/groceries-menu.component';
import { KitchenMenuComponent } from './menu/kitchen-menu/kitchen-menu.component';

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
    MenuComponent,
    BooksMenuComponent,
    FashionMenuComponent,
    FurnitureMenuComponent,
    OutdoorMenuComponent,
    GroceriesMenuComponent,
    KitchenMenuComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
