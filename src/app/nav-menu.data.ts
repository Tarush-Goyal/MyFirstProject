import { Injectable } from '@angular/core';

export interface navData{
  item:string,
  list:string[]
}

@Injectable({providedIn:'root'})

export class NavMenuData{

  Fashion=[
    {
      item:'men',
      list:['Shirt','T-Shirt','Jeans']
    },

    {
      item:'women',
      list:['Shirt','T-Shirt','Jeans']
    },

    {
      item:'Winter Wear',
      list:['Jackets','Sweaters','Coats']
    },

    {
      item:'Ethnic Wear',
      list:['Kurtas','Sherwanis','Jackets']
    }
  ];

  Furniture=[
    {
      item:'Sofa',
      list:['Recliner','3-Seat','Sectional']
    },

    {
      item:'Chair',
      list:['Plastic','Foldable','Revolving']
    },

    {
      item:'Desk',
      list:['Steel','Wood','Plastic']
    },

    {
      item:'Table',
      list:['Coffee','Dining']
    }
  ];

  Electronics=[
    {
      item:'Phones',
      list:['Apple','Samsung','OnePlus']
    },

    {
      item:'Televisions',
      list:['Samsung','Sony','Xiaomi']
    },

    {
      item:'Fridges',
      list:['Haier','Samsung','LG']
    },

    {
      item:'Air Conditioners',
      list:['General','Voltas','Daikin']
    }
  ]

  Grocery=[
    {
      item:'fruit',
      list:['apple','orange','mango','banana']
    },

    {
      item:'vegetable',
      list:['potato','onion','tomato','carrot']
    },

    {
      item:'chips',
      list:['lays','doritos','uncle chips','cornitos']
    },

    {
      item:'noodles',
      list:['maggi','yippee']
    }
  ]
}
