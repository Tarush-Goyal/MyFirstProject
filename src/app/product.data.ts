import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

export class ProductData {

Product=[
  {
    note9:[
      {
        title:['Samsung Galaxy Note 9'],
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
        details:[
          'Camera: 12 MP + Dual Rear Camera (F1.5/F2.4) + 12 MP (F2.4)',
          ' MP (F1.7) front camera',
          'Memory: 6GB RAM',
          'Battery: 4000 mAH lithium ion battery'
        ]
      }
    ]
  }
]

Product2:IProductViewModel[]=[
  {
        title:'Samsung Galaxy Note 9',
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
        details:[
          'Camera: 12 MP + Dual Rear Camera (F1.5/F2.4) + 12 MP (F2.4)',
          ' MP (F1.7) front camera',
          'Memory: 6GB RAM',
          'Battery: 4000 mAH lithium ion battery'
        ]
  }
];

productImages=[
  {
    note9:
    [
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
    ]

  }
]


}

export interface IProductViewModel {
  title: string;
  images: IImageMapViewModel[];
  details: string[];
  price?: string;
}

export interface IImageMapViewModel {
  srcUrl: string;
  previewUrl: string;
}
