import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

counter=10;
user='Guest';
temp=false;

open(){
this.temp=!this.temp;  
}

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon(
          "my-cart",
          domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/shopping_cart-24px.svg"));
         }

  ngOnInit(): void {
  }

}
