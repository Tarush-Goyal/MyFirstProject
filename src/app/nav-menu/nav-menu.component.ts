import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { NavMenuData } from '../nav-menu.data';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor(public navMenuData:NavMenuData) { }

  ngOnInit(): void {
  }

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
      }, 25);
}

enterMenu(){
  this.entered=true;
}

leaveMenu(trigger:MatMenuTrigger){
  this.leave(trigger);

}



}
