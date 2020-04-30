import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { IProductViewModel } from "./product.data";

@Injectable({ providedIn: "root" })
export class UpdateCart {
  value = 0;
  changeCart: Subject<number> = new Subject<number>();
  cartProduct: IProductViewModel[] = [];

  cartProduct2;




  checkCart2(){
      let counter=new Array<number>(this.cartProduct.length)
    counter.fill(0);
    console.log('counter:',counter)
this.cartProduct2 = Array.from(new Set(this.cartProduct.map(a => a.id)))
 .map(id => {
   return this.cartProduct.find(a => a.id === id)
 })


 for(let i in this.cartProduct2){
   for(let j in this.cartProduct){
     if(this.cartProduct2[i].id===this.cartProduct[j].id){

counter[i]++;

     }
   }
 }
 console.log('Quantity:',counter);
return counter;
}

getProduct(){
  let counter=this.checkCart2();
   console.log('without duplicates:',this.cartProduct2);
   let temp=[this.cartProduct2,counter]
  return temp;
}


}
