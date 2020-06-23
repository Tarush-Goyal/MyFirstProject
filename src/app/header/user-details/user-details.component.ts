import { Component, OnInit } from '@angular/core';
import { AuthService, UserDetails } from 'src/app/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  Details: UserDetails[]=[];
  error=null;
  userEmail=null;
  currentUserDetails: UserDetails;
  visible='visibility';

  constructor(private authService:AuthService) { }

  fetchUserDetails(){
    this.authService.fetchData().subscribe(
      data => {

        this.Details = data;
        this.displayUserDetails();
      },
      error => {

        this.error = error.message;
        console.log(error);
      },

    );

  }

  displayUserDetails(){
    for(let i in this.Details){
      if(this.userEmail===this.Details[i].email){
        this.currentUserDetails=this.Details[i];
        return;
      }
    }
  }

  password(n:number){
    return Array(n);
  }

  changeVisibility(){
    if(this.visible==='visibility'){
      this.visible='visibility_off';
    }
    else
    this.visible='visibility';
  }

  getVisibility(){
    return this.visible==='visibility';
  }

  ngOnInit(): void {

    this.authService.getEmail().subscribe(email=>{
      this.userEmail=email;
      if(this.userEmail!=null){
        this.fetchUserDetails();
      }
      else{
        this.currentUserDetails=null;
      }

    });

  }

}
