import { Router } from '@angular/router';
import { CartService } from './../cart.service';
import { Products } from './../products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.component.html',
  styleUrls: ['./cartview.component.css']
})
export class CartviewComponent implements OnInit {

  constructor(private cart:CartService,private router:Router) { }

  carts:Products[]=[];


  ngOnInit() {
      this.cart.getCart()
        .subscribe(data =>{
          this.carts=data;
        })
  }

  clearCart(){
    this.cart.clearCart()
      .subscribe(data =>{
        this.carts=data;
      })
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  checkout(){
    this.router.navigate(['/checkout']);
  }

}
