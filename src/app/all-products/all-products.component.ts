import { Component, OnInit } from "@angular/core";
import { ProductData } from "../product.data";
import { Router } from "@angular/router";

@Component({
  selector: "app-all-products",
  templateUrl: "./all-products.component.html",
  styleUrls: ["./all-products.component.scss"]
})
export class AllProductsComponent implements OnInit {
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

  product = [];
  newProducts = [];
  categoryFilter = false;
  sliderFilter = false;
  currentSliderValue = 100000;
  constructor(public productData: ProductData, private route: Router) {}

  ngOnInit(): void {
    this.product = this.productData.Product;
    this.newProducts = this.productData.Product;
  }

  addedProductsByCategory(i){
    for (let j in this.product) {
      if (this.product[j].id.slice(0, 2) == this.categories[i].id) {
        this.newProducts.push(this.product[j]);
      }
    }
  }

  removeDuplicates(arr){
    let set = new Set(arr);
    arr = [...set];
    return arr;
  }

  addedProductsByFirstCategory(i){
    this.categoryFilter = true;
    this.newProducts = [];
    this.addedProductsByCategory(i);
  }

addedProductsBySliding(){
  if (this.currentSliderValue === 0) {
    this.newProducts = [];
  }



  else if(this.categoryFilter && this.currentSliderValue > 0){ //removing products by sliding and category=selected
// this.newProducts = [];
for(let i = 0; i < this.newProducts.length; i++){
  if(this.newProducts[i].discountedPrice>this.currentSliderValue){
    this.newProducts = this.remove(this.newProducts, i);
    this.newProducts.pop();
    i = 0;

  }
}
  }

  else if (this.currentSliderValue > 0) { //no category selected and adding products by sliding
    this.newProducts = [];
    for (let i in this.product) {
      if (this.product[i].discountedPrice <= this.currentSliderValue) {
        this.newProducts.push(this.product[i]);
      }
    }
  }
}

  lastCategoryWasUnselected(){
    if (this.newProducts.length === 0) {
      this.categoryFilter = false;
      this.newProducts = this.productData.Product;
      return true;
    }
  }

  checkboxUnticked(i){
    for (let x = 0; x < this.newProducts.length; x++) {
      if (this.newProducts[x].id.slice(0, 2) == this.categories[i].id) {
        this.newProducts = this.remove(this.newProducts, x);
        this.newProducts.pop();
        x = 0;
      }
    }
    if (
      this.newProducts.length === 1 &&
      this.newProducts[0].id.slice(0, 2) == this.categories[i].id
    ) {
      this.newProducts.pop();
    }
    this.lastCategoryWasUnselected();
  }

  slided(slider) {
    this.currentSliderValue = slider.value;
    if(this.sliderFilter==false){
      this.sliderFilter = true;
      this.addedProductsBySliding();
    }
    else if(this.sliderFilter==true){
      if(this.categoryFilter && this.currentSliderValue > 0){ //category selected and slider=some value, adding new products by increasing slider
    console.log('entered in 2nd slide')
        let sliderProducts=[];
        let categoryProducts=[];

        for (let i in this.product) {
          if (this.product[i].discountedPrice <= this.currentSliderValue) {
            sliderProducts.push(this.product[i]);

          }
        }

        for (let i in this.newProducts) {
          for(let j in this.product){
          if (this.newProducts[i].id.slice(0, 2) == this.product[j].id.slice(0, 2)) {
            categoryProducts.push(this.product[j]);

          }
        }
      }
      console.log('sliderproduct:',sliderProducts);
      console.log('categoryproduct:',categoryProducts);

      for(let i in sliderProducts){
        for(let j in categoryProducts){
          if(sliderProducts[i].id==categoryProducts[j].id){
            this.newProducts.push(sliderProducts[i]);
          }
        }
      }
      this.newProducts=this.removeDuplicates(this.newProducts);

      }

      else if(this.currentSliderValue >= 0){
        // this.newProducts=[];
        this.addedProductsBySliding();

      }
    }

  }

  categoryClicked(id, i) {
    // console.log(id);
    if (id.checked == false) { //checkbox=ticked
      if (this.sliderFilter === false) { //checkbox=ticked and slider=default
        if (this.categoryFilter == false) { //1st checkbox=ticked and slider=default
          this.addedProductsByFirstCategory(i);
        } else if (this.categoryFilter == true) { //2nd or more checkbox=ticked and slider=default
          this.addedProductsByCategory(i);
        }
      } else if (this.sliderFilter === true) { //checkbox=ticked and slider=user defined value
        if (this.categoryFilter == false) { //1st checkbox=ticked and slider=user defined value
          this.categoryFilter=true;
          this.newProducts = [];
          for (let j in this.product) {
            if (
              this.product[j].id.slice(0, 2) == this.categories[i].id &&
              this.product[j].discountedPrice <= this.currentSliderValue
            ) {
              this.newProducts.push(this.product[j]);
              this.newProducts=this.removeDuplicates(this.newProducts);

            }
          }
        } else if (this.categoryFilter == true) { //2nd or more checkbox=ticked and slider=user defined value
          for (let j in this.product) {
            if (
              this.product[j].id.slice(0, 2) == this.categories[i].id &&
              this.product[j].discountedPrice <= this.currentSliderValue
            ) {
              this.newProducts.push(this.product[j]);
              this.newProducts=this.removeDuplicates(this.newProducts);
            }
          }
        }


      }
    } else if (id.checked == true) { //checkbox=unticked
      if (this.sliderFilter == false) { //slider at default and checkbox was unticked (untouched)
        this.checkboxUnticked(i);
      } else if (this.sliderFilter == true) { //slider at some user defined value and checkbox was unticked
        console.log('slider and 2nd catwgory unselected');
        this.checkboxUnticked(i);

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
