import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  Type = "password";
  visible = "visibility";
  values = "";
  focus = true;
  errorMsg;
  successMsg;
  // temp={id:1};

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstname: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      // 'email':new FormControl('',{validators:[Validators.required,Validators.email],updateOn: 'blur'}),
      email: new FormControl("", [Validators.required, Validators.email]),
      // 'password':new FormControl('',{validators:[Validators.required,Validators.minLength(6)],updateOn:'blur'}),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    });
    //signupForm.controls.email.value.length

    // this.signupForm.get('email').valueChanges.subscribe((newValue: any)=>{
    //   console.log('NEWVALUE', newValue)
    //   this.values=newValue;
    // })
  }

  onFocus() {
    // this.signupForm.get('password').setErrors({'required':false});
    this.signupForm.get("password").markAsUntouched();
    // this.signupForm.get('password').updateValueAndValidity();
    this.focus = true;

    // this.signupForm.controls.password.markAsUntouched({ emitEvent: true });
  }

  onSubmit() {
    let email = this.signupForm.get("email").value;
    let password = this.signupForm.get("password").value;
    this.authService.signup(email, password).subscribe(
      registerData => console.log(registerData),
      error => {
        
        this.errorMsg = error;
        // this.signupForm.reset({firstname:'',lastname:'',email:'',password:''});
      },
      () => {
        this.errorMsg='';
        this.successMsg = "Registered Successfully";
        setTimeout(()=>{this.signupForm.reset(),1000})
      }
    );


    // this.http.post('https://my-project-95bb8.firebaseio.com/form.json',this.temp).subscribe(responseData=>console.log(responseData))
  }

  login() {
    this.router.navigate(["login"]);
  }

  showPassword() {
    if (this.Type === "password") {
      this.Type = "text";
      this.visible = "visibility_off";
    } else {
      this.Type = "password";
      this.visible = "visibility";
    }
  }
}
