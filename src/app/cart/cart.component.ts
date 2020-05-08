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

  Element_data:NewModel[]=[]
  productAdded;
  newProduct;
  quantity;
    displayedColumns2=['no','image','title','quantity','price']

  constructor(private updateCart: UpdateCart) { }

  ngOnInit(): void {
    if(this.updateCart.value>0){
      this.productAdded=true;
    }
    let temp=this.updateCart.getProduct();
    this.newProduct=temp[0];
    this.quantity=temp[1];

    for(let i in this.newProduct){
      this.newProduct[i].price=(this.newProduct[i].price-
      ~~((this.newProduct[i].price * this.newProduct[i].discount) / 100))*this.quantity[i]
      let option:NewModel={
        product:this.newProduct[i],
        quantity:this.quantity[i],
        no:+i+1,
      };
      this.Element_data[i]=option;

    }
  }

}
