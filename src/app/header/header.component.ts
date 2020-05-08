import { Component, OnInit } from '@angular/core';
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

currentUser='Guest';

loggedIn=false;



constructor(private sidenavToggle:SidenavToggle,private authService:AuthService){

}

toggle(){
  this.sidenavToggle.toggleSidebarVisibility();
}

onClick(){
this.toggle();
}

logOut(){
  console.log('logout clicked');
  this.authService.signOut();
}


  ngOnInit(): void {
      this.authService.loggedStatus.subscribe(value=>{this.loggedIn=value;
      console.log(this.loggedIn);
    });


    this.authService.getEmail().subscribe(email=>{
      this.currentUser=email;
    });

      this.authService.user.subscribe(user=>this.currentUser=user);
  }

  ngOnChanges(){
    this.authService.loggedStatus.subscribe(value=>{this.loggedIn=value;
    console.log(this.loggedIn)});

    this.authService.getEmail().subscribe(email=>{
      this.currentUser=email;
    });

    this.authService.user.subscribe(user=>this.currentUser=user);
  }


}
