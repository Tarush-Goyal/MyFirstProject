import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Fashion=['men','women'];
  Grocery=['fruit','vegetable'];
  Furniture=['table','desk'];
  Electronics=['Phones','TVs']

entered=false;


enter(trigger:MatMenuTrigger){
this.entered=true;
  trigger.openMenu();
}

leave(trigger:MatMenuTrigger){
  this.entered=false;
  setTimeout (() => {
        if(this.entered===false)
        {trigger.closeMenu();}
      }, 40);
}

enterMenu(){
  this.entered=true;
  console.log(this.entered);
}

leaveMenu(trigger:MatMenuTrigger){
  this.leave(trigger);

}



}
