import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class UpdateCart{
  changeCart: Subject<number> = new Subject<number>();
}
