import { Component, OnInit } from '@angular/core';
import { UpdateCart } from '../update-cart';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
count:number=0;
constructor(private updateCart:UpdateCart){}


  ngOnInit() {
    this.updateCart.changeCart.subscribe(value => {
      this.count=value;
    });
  }

}
