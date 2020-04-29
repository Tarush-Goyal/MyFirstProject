import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IProductViewModel } from './product.data';

@Injectable({providedIn:'root'})
export class UpdateCart{
  value=0;
  changeCart: Subject<number> = new Subject<number>();
  cartProduct:IProductViewModel[]=[];
}
