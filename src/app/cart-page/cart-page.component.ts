import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, priceSummary } from '../data.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {

  cartData:cart[] | undefined;
  priceSummary: priceSummary={
    price:0,
    discount:0,
    tax:0,
    delivery:0,
    total:0
  };
  constructor(private product:ProductService,private router:Router){}

  ngOnInit(): void {
    this.product.currentCart().subscribe((result)=>{
      console.warn(result)
      this.cartData=result;
      let price=0;
      result.forEach((item) => {
        if(item.quantity && item.price){
          price = price + (item.price * +item.quantity);
        }
        
    });
    this.priceSummary.price=price;
    this.priceSummary.discount=price/10;
    this.priceSummary.tax=price/10;
    this.priceSummary.delivery=100;
    this.priceSummary.total=price+(price/10)+100-(price/10)
    })
  }

  checkout() {
    this.router.navigate(['checkout'])
  }

  removeToCart(arg0: any) {
    
  }


}
