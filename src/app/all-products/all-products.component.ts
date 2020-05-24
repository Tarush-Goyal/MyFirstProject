import { Component, OnInit } from "@angular/core";
import { ProductData } from "../product.data";
import { Router } from "@angular/router";

@Component({
  selector: "app-all-products",
  templateUrl: "./all-products.component.html",
  styleUrls: ["./all-products.component.scss"]
})
export class AllProductsComponent implements OnInit {
  product;
  categories = [
    {
      category: "Groceries",
      id: "GR"
    },
    {
      category: "Fashion",
      id: "FA"
    },
    {
      category: "Furniture",
      id: "FU"
    },
    {
      category: "Electronics",
      id: "EL"
    }
  ];

  newProducts = [];
  temp = false;
  // newPrice = [];
  constructor(public productData: ProductData, private route: Router) {}

  ngOnInit(): void {
    this.product = this.productData.Product;
  }

  slided(slider) {
    this.temp=true;
    console.log(slider.value);
    for(let i in this.product)  {
    if(this.product[i].discountedPrice<=slider.value){
      this.newProducts.push(this.product[i]);
      }
    }
  }

  categoryClicked(id, i) {
    if (id.checked == false) {
      this.temp = true;
      for (let j in this.product) {
        if (this.product[j].id.slice(0, 2) == this.categories[i].id) {
          this.newProducts.push(this.product[j]);
          // this.newPrice.push(this.product[j].discountedPrice);
        }
      }
    }
    else {
      for (let x = 0; x < this.newProducts.length; x++) {
        if (this.newProducts[x].id.slice(0, 2) == this.categories[i].id) {
          this.newProducts = this.remove(this.newProducts, x);
          this.newProducts.pop();
          // this.newPrice = this.remove(this.newPrice, x);
          // this.newPrice.pop();
          x = 0;
        }
      }
      if (
        this.newProducts.length === 1 &&
        this.newProducts[0].id.slice(0, 2) == this.categories[i].id
      ) {
        this.newProducts.pop();
      }
      if (this.newProducts.length === 0) {
        this.temp = false;
      }
    }
  }

  remove(a, b) {
    let temp2 = a[a.length - 1];
    a[a.length - 1] = a[b];
    a[b] = temp2;
    return a;
  }

  navigateToProduct(i: number) {
    this.route.navigate(["/product-page", this.product[i].id]);
  }

  navigateToProduct2(i: string) {
    this.route.navigate(["/product-page/", i]);
  }
}
