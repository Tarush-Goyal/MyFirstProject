import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  Type='password';
  visible='visibility'
  values='';
  focus=true;
  errorMsg=null;
  successMsg=null;

  constructor(private router: Router,private http: HttpClient, private authService:AuthService,) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
        'email':new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }

register(){
  this.router.navigate(["register"]);
}

onSubmit(){
  let email=this.loginForm.get('email').value;
      let password=this.loginForm.get('password').value;
      this.authService.login(email,password).subscribe(
        loginData=>{
          this.authService.getEmail().next(loginData.email);

        },
      error=>{
      this.errorMsg=error},
      ()=>{
        this.errorMsg='';
        this.successMsg="Logged in Successfully";
    // setTimeout(()=>{this.loginForm.reset(),1000})
  }
)
if(!this.errorMsg){
  this.authService.loggedStatus.next(true);
}
}

onFocus(){
  // this.signupForm.get('password').setErrors({'required':false});
  this.loginForm.get('password').markAsUntouched();
  // this.signupForm.get('password').updateValueAndValidity();
  this.focus=true;

  // this.signupForm.controls.password.markAsUntouched();
}

showPassword(){
  if(this.Type==='password')  {
    this.Type='text';
    this.visible='visibility_off';
  }
  else
  {
    this.Type='password';
    this.visible='visibility';
  }
}

ngOnDestroy(){
  this.errorMsg='';
  this.successMsg='';
}

  }
