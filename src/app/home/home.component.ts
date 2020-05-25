import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  products = [
    { id: "FA1", image: "../assets/images/FA1_1.jpg" },
    { id: "GR1", image: "../assets/images/maggi1.jpeg" },
    { id: "FU1", image: "../assets/images/sofa1.jpg"},
    { id: "EL1", image: "../assets/images/note9.jpg"}
  ];

  constructor( private route: Router) {}

  ngOnInit(): void {}

  navigateToProduct(i: number) {
    this.route.navigate(["/product-page", this.products[i].id]);
  }
}
