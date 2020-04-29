import { Component, OnInit } from '@angular/core';
import { IProductViewModel } from '../product.data';
import { UpdateCart } from '../update-cart';


export interface NewModel{
  product: IProductViewModel,
  quantity:number
  no:number
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {


productNo=1;
productQuantity=1;
  Element_data:NewModel[]=[]
  productAdded;
  displayedColumns2=['no','image','title','quantity','price']

  constructor(private updateCart: UpdateCart) { }

  ngOnInit(): void {
    if(this.updateCart.value>0){
      this.productAdded=true;
    }

    for(let i in this.updateCart.cartProduct){
      this.updateCart.cartProduct[i].price=this.updateCart.cartProduct[i].price-
      ~~((this.updateCart.cartProduct[i].price * this.updateCart.cartProduct[i].discount) / 100)
      let option:NewModel={
        product:this.updateCart.cartProduct[i],
        quantity:this.productQuantity,
        no:this.productNo,
      };
      this.Element_data[i]=option;

    }
  }

}
