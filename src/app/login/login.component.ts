import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  signupForm:FormGroup;
  Type='password';
  visible='visibility'
  values='';
  focus=true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.signupForm=new FormGroup({
      'username':new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }

register(){
  this.router.navigate(["register"]);
}

onSubmit(){
  this.router.navigate(["user"]);
}

onFocus(){
  // this.signupForm.get('password').setErrors({'required':false});
  this.signupForm.get('password').markAsUntouched();
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

  }
