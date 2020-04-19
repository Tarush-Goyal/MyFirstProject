import { Component, OnInit } from '@angular/core';
// import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {SidenavToggle} from '../sidenav-toggle.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[],
  // host: {
  //   "(document:click)": "onClick()"
  // }
})
export class HeaderComponent implements OnInit {

user='Guest';

constructor(private sidenavToggle:SidenavToggle){

}
  // constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
  //   matIconRegistry.addSvgIcon(
  //         "my-cart",
  //         domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/shopping_cart-24px.svg"));
  //        }
toggle(){
  // console.log(this.sidenavToggle.temp);
  this.sidenavToggle.toggleSidebarVisibility();
}

onClick(){
this.toggle();
}
  ngOnInit(): void {
  }

}
