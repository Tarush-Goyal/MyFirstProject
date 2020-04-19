import { Component, OnInit } from '@angular/core';
import { UpdateCart } from '../update-cart';
import { Lightbox } from '@ngx-gallery/lightbox';
import { GalleryItem, ImageItem, Gallery } from '@ngx-gallery/core';
import { ProductData } from '../product.data';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  ngOnInit(): void {
    this.gallery.ref().load(this.items);
  }
  constructor(private updateCart:UpdateCart, public gallery: Gallery, private productData:ProductData) { }

  images: GalleryItem[];
  // data=this.productData.productImages[0].note9;
  // imgData=this.productData.Product[0].note9[0].images;
  // title=this.productData.Product[0].note9[0].title;
  // Content=this.productData.Product[0].note9[0].details;
  
  title=this.productData.Product2[0].title;
  imgData=this.productData.Product2[0].images;
  Content=this.productData.Product2[0].details;


  items: GalleryItem[] = this.imgData.map(item =>
    new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
  );

  value=0;
  index=0;
  clicker:boolean[];

  buttonClicked(i:number)
  {
    this.index=i;
  }



Images=['./assets/images/note9.jpg','./assets/images/note9_back.jpg','./assets/images/SPen.jpg']

add(){
  this.updateCart.changeCart.next(++this.value);
}

// changeImage(){
// this.value=(this.value+1)%this.Images.length;
// }



}
