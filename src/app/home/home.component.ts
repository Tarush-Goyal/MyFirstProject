import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

Images=['../assets/images/FA1_1.jpg','../assets/images/maggi1.jpeg','../assets/images/sofa1.jpg','../assets/images/note9.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
