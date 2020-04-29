import { Component, OnInit } from '@angular/core';
import { IProductViewModel } from '../product.data';
import { UpdateCart } from '../update-cart';


export interface NewModel{
  product: IProductViewModel,
  quantity:number
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {



  Element_data:NewModel[]=[]
  productAdded;
  displayedColumns2=['no','image','title','quantity','price']
  Quantity=[1,2,3]
  // obj={id:string,num:number}

  constructor(public updateCart: UpdateCart) { }

  ngOnInit(): void {
    if(this.updateCart.value>0){
      this.productAdded=true;
    }

    // this.updateCart.checkCart();

    for(let i in this.updateCart.cartProduct){
      let option:NewModel={
        product:this.updateCart.cartProduct[i],
        quantity:1
      };
      this.Element_data[i]=option;
      // this.Element_data[i].product=this.updateCart.cartProduct[i];
      // this.Element_data[i].quantity=1;
      this.Element_data[i].product.price=
      this.Element_data[i].product.price -
      ~~((this.Element_data[i].product.price * this.Element_data[i].product.discount) / 100);
    }
  }

}
