import { Observable, of } from 'rxjs';
import { Products } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Products[]=[];

  constructor() { }

  addToCart(product:Products){
   let isExisted=false;
     this.cart.forEach( a =>{
       if(a.id==product.id){
         isExisted=true;
       }
     })
     if(!isExisted){
       this.cart.push(product);
     }
     

    
     console.log("add to cart...");
  }

  cartSize():Observable<number>{
     
    return of(this.cart.length);
  }

  getCart():Observable<Products[]>{
    return of(this.cart);
  }

  clearCart():Observable<Products[]>{
    this.cart=[];

    return of(this.cart);
  }


}
