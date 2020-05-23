import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  addressForm:FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.addressForm=new FormGroup({
        'firstname':new FormControl('',[Validators.required]),
      'lastname': new FormControl('',[Validators.required]),
      'address': new FormControl('',[Validators.required]),
      'country': new FormControl('',[Validators.required]),
      'state': new FormControl('',[Validators.required]),
      'city': new FormControl('',[Validators.required]),
      'pincode': new FormControl('',[Validators.required]),
    });
  }

}
