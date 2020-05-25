import { Injectable } from '@angular/core';



export interface IProductViewModel {
  id:string;
  title: string;
  images: IImageMapViewModel[];
  price: number;
  discount: number;
  discountedPrice: number;
  details: string[];

}

export interface IImageMapViewModel {
  srcUrl: string;
  previewUrl: string;
}

@Injectable({providedIn:'root'})

export class ProductData {


Product:IProductViewModel[]=[
  {
        id:'EL1',
        title:'Smartphone',
        images:[
          {
           srcUrl: './assets/images/note9.jpg',
           previewUrl: './assets/images/note9.jpg'
          },
          {
           srcUrl: './assets/images/note9_back.jpg',
           previewUrl: './assets/images/note9_back.jpg'
          },

          {
           srcUrl: './assets/images/SPen.jpg',
           previewUrl: './assets/images/SPen.jpg'
          }
        ],
        price:67999,
        discount:50,
        discountedPrice:33999,
        details:[
          'Camera: 12 MP + Dual Rear Camera (F1.5/F2.4) + 12 MP (F2.4)',
          ' MP (F1.7) front camera',
          'Memory: 6GB RAM',
          'Battery: 4000 mAH lithium ion battery'
        ]
  },
  {
        id:'GR1',
        title:'Maggi',
        images:[
          {
           srcUrl: './assets/images/maggi1.jpeg',
           previewUrl: './assets/images/maggi1.jpeg'
          },
          {
           srcUrl: './assets/images/maggi2.jpg',
           previewUrl: './assets/images/maggi2.jpg'
          },

        ],
        price:20,
        discount:10,
        discountedPrice:18,
        details:[
          'This is a Vegetarian product',
          ' Goodness of calcium and protein',
          'No added MSG',
          'Favourite maggi masala taste'
        ]
  },

  {
        id:'FU1',
        title:'Sofa',
        images:[
          {
           srcUrl: './assets/images/sofa1.jpg',
           previewUrl: './assets/images/sofa1.jpg'
          },
          {
           srcUrl: './assets/images/sofa2.jpg',
           previewUrl: './assets/images/sofa2.jpg'
          },

          {
           srcUrl: './assets/images/sofa3.jpg',
           previewUrl: './assets/images/sofa3.jpg'
          }
        ],
        price:9999,
        discount:40,
        discountedPrice:5999,
        details:[
          'Dimensions: H 34 x W 75 x D 32.5',
          ' Frame Material : Pine wood & Commercial Grade Ply Wood',
          'Leg : Pine Wood',
          'Fabric : 51% PES 49% PE'
        ]
  },

  {
        id:'FA1',
        title:'Casual T-Shirt',
        images:[
          {
           srcUrl: './assets/images/FA1_1.jpg',
           previewUrl: './assets/images/FA1_1.jpg'
          },
          {
           srcUrl: './assets/images/FA1_2.jpg',
           previewUrl: './assets/images/FA1_2.jpg'
          },

          {
           srcUrl: './assets/images/FA1_3.jpg',
           previewUrl: './assets/images/FA1_3.jpg'
          }
        ],
        price:499,
        discount:20,
        discountedPrice:399,
        details:[
          'Round-necked T-shirts in soft jersey.',
          ' 100% Original Products',
          'Try & Buy available',
          'Fabric :95% Cotton, 5% Elastane'
        ]
  },

  {
        id:'EL2',
        title:'Mi TV',
        images:[
          {
           srcUrl: './assets/images/tv1.jpeg',
           previewUrl: './assets/images/tv1.jpeg'
          },
          {
           srcUrl: './assets/images/tv2.jpeg',
           previewUrl: './assets/images/tv2.jpeg'
          },

          {
           srcUrl: './assets/images/tv3.jpeg',
           previewUrl: './assets/images/tv3.jpeg'
          }
        ],
        price:19999,
        discount:30,
        discountedPrice:13999,
        details:[
          'Operating System: Android (Chromecast in-built)',
          ' 1Resolution: Full HD 1920 x 1080 Pixels',
          'Sound Output: 20 W',
          'Refresh Rate: 60 Hz'
        ]
  },

  {
        id:'FA2',
        title:'Solid Round Neck T-Shirt',
        images:[
          {
           srcUrl: './assets/images/FA2_1.jpg',
           previewUrl: './assets/images/FA2_1.jpg'
          },
          {
           srcUrl: './assets/images/FA2_2.jpg',
           previewUrl: './assets/images/FA2_2.jpg'
          },

          {
           srcUrl: './assets/images/FA2_3.jpg',
           previewUrl: './assets/images/FA2_3.jpg'
          }
        ],
        price:599,
        discount:20,
        discountedPrice:479,
        details:[
          'Black solid T-shirt, has a round neck, and long sleeves',
          ' 100% Original Products',
          'Material: 100% Cotton',
          'Fabric : 95% Cotton, 5% Elastane'
        ]
  },




];



}
