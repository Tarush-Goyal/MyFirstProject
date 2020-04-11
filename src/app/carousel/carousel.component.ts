import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

num=[0,1];
  yo=['./assets/images/mountain.jpg','./assets/images/ss.png'];
  constructor() { }

  ngOnInit(): void {
  }

}
