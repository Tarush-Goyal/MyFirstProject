import { Component, OnInit } from '@angular/core';
// import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {SidenavToggle} from '../sidenav-toggle.service'
import { AuthService } from '../auth.service';
import { Subject } from 'rxjs';


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
loggedIn=false;



constructor(private sidenavToggle:SidenavToggle,private authService:AuthService){

}
  // constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
  //   matIconRegistry.addSvgIcon(
  //         "my-cart",
  //         domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/shopping_cart-24px.svg"));
  //        }
toggle(){
  this.sidenavToggle.toggleSidebarVisibility();
}

onClick(){
this.toggle();
}

clickMe(){
  this.authService.signOut();
  this.authService.loggedStatus.next(false);

}


  ngOnInit(): void {
      this.authService.loggedStatus.subscribe(value=>{this.loggedIn=value;
      console.log(this.loggedIn)});
  }

  ngOnChanges(){
    this.authService.loggedStatus.subscribe(value=>{this.loggedIn=value;
    console.log(this.loggedIn)});
  }


}
