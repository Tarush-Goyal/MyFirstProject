import { Component, OnInit } from "@angular/core";
import { UpdateCart } from "../update-cart";
import { Lightbox } from "@ngx-gallery/lightbox";
import { GalleryItem, ImageItem, Gallery } from "@ngx-gallery/core";
import { ProductData, IProductViewModel } from "../product.data";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"]
})
export class ProductPageComponent implements OnInit {
  productID: string;
  product: IProductViewModel;
  discountedPrice;
  constructor(
    private updateCart: UpdateCart,
    public gallery: Gallery,
    private productData: ProductData,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.productID=params['id'];
      console.log("this.productID", this.productID);
    });
    this.findProduct();

    this.discountedPrice=this.product.price-~~(this.product.price*this.product.discount/100);
    this.gallery.ref().load(this.items);
  }

  images: GalleryItem[];

  findProduct() {
    // console.log("this.productID", this.productI);
    this.product = this.productData.Product.find(
      (element:IProductViewModel) => element.id === this.productID
    );

    this.items = this.product.images.map(
      item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
  }

  items: GalleryItem[] = [];
  index = 0;
  clicker: boolean[];


  buttonClicked(i: number) {
    this.index = i;
  }

  add() {
    this.updateCart.changeCart.next(++this.updateCart.value);
    this.updateCart.cartProduct.push(Object.assign({},this.product));
    // this.updateCart.cartProduct.push(this.product);
  }
}
