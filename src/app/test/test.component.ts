import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  clicked(){
    const mySubject = new ReplaySubject(2);

mySubject.next(1);
mySubject.next(2);
mySubject.next(3);
mySubject.next(4);

mySubject.subscribe(x => {
  console.log('From 1st sub:', x);
});

mySubject.next(5);

mySubject.subscribe(x => {
  console.log('From 2nd sub:', x);
});

  }

  ngOnInit(): void {
  }

}
