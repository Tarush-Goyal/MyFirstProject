import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  firstFormGroup: FormGroup;
  newForm: FormGroup;
  @ViewChild(CheckoutComponent) checkout: CheckoutComponent;


  constructor() { }

  ngOnInit(): void {
    this.firstFormGroup = new FormGroup({});
  }

  ngAfterViewInit() {
  this.firstFormGroup.addControl('childForm', this.checkout.addressForm);
}

}
