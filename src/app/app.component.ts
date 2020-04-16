import { Component } from '@angular/core';
import { SidenavToggle } from './sidenav-toggle.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[SidenavToggle]
})
export class AppComponent {
constructor(){}
  ngOnInit(): void {
  }

  title = 'My-Project';

}
