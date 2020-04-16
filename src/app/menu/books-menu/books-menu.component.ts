import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-books-menu',
  templateUrl: './books-menu.component.html',
  styleUrls: ['./books-menu.component.scss']
})
export class BooksMenuComponent implements OnInit {

@ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

enter(){
  this.trigger.openMenu();
  console.log('entered');
}

exit(){

  this.trigger.toggleMenu();
  console.log('exit');
}

  constructor() { }

  ngOnInit(): void {
  }

}
