import { Products } from './../products';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  carts:Products[]=[];

  totalprice:number=0;

  constructor(private cart:CartService) { }

  ngOnInit() {
    this.cart.getCart().subscribe(data =>{
      this.carts=data;
    })

    /*this.carts.forEach(data =>{
      this.totalprice+=data.price;
    })
    */

  }

  quantity:number[]=[];

  balances:[]=[];

  calculateBalance(value){


    //console.log(document.getElementById(value).value);
    this.quantity.push(parseInt(document.getElementById(value).value));

   // this.total();


  }

  total(){
    this.carts.forEach((p,index) =>{
      this.totalprice += p.price * (this.quantity[index]);
    })
  }



}
