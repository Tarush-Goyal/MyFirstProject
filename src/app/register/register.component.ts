import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog'

import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

signupForm: FormGroup;
Type='password';
visible='visibility';
values='';
focus=true;


  constructor(private router: Router) { }

  ngOnInit() {
    this.signupForm=new FormGroup({
      'firstname':new FormControl('',[Validators.required]),
      'lastname':new FormControl('',[Validators.required]),
      // 'email':new FormControl('',{validators:[Validators.required,Validators.email],updateOn: 'blur'}),
      'email':new FormControl('',[Validators.required,Validators.email]),
      // 'password':new FormControl('',{validators:[Validators.required,Validators.minLength(6)],updateOn:'blur'}),
      'password': new FormControl('',[Validators.required,Validators.minLength(6)])
    });
    //signupForm.controls.email.value.length

    // this.signupForm.get('email').valueChanges.subscribe((newValue: any)=>{
    //   console.log('NEWVALUE', newValue)
    //   this.values=newValue;
    // })

  }


onFocus(){
  // this.signupForm.get('password').setErrors({'required':false});
  this.signupForm.get('password').markAsUntouched();
  // this.signupForm.get('password').updateValueAndValidity();
  this.focus=true;

  // this.signupForm.controls.password.markAsUntouched({ emitEvent: true });
}

  onSubmit(){
    this.router.navigate(["user"]);
  }

  login(){
    this.router.navigate(["login"]);
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
