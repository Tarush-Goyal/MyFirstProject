import { Component, OnInit, Input } from '@angular/core';
import { SidenavToggle } from '../sidenav-toggle.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  isOpen:boolean=false;

  constructor(private sidenavToggle:SidenavToggle){
    this.sidenavToggle.sidebarVisibilityChange.subscribe(value => {
      this.isOpen=value;
    });
  }

  ngOnInit(): void {
  }
test(event){
  this.sidenavToggle.updateState(event);
}
}
