export interface signUp{
    name:string,
    email:string,
    password:string
}

export interface login{
    email:string,
    password:string
}

export interface product{
    name:string,
    price:number,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined | number,
    productId:undefined|number
  }

  export interface cart{
    name:string,
    price:number | undefined,
    category:string,
    color:string,
    image:string,
    description:string,
    id:number | undefined,
    quantity:undefined | number,
    productId:undefined|number,
    userId:number
  }

  export interface priceSummary{
    price:number|undefined,
    discount:number|undefined,
    tax:number|undefined,
    delivery:number|undefined,
    total:number|undefined
  }

  export interface order{
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:number,
    id:number|undefined
  }