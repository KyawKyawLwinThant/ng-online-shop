import { CartService } from './../cart.service';
import { Component, OnInit, OnChanges, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges,AfterContentInit {
  
  ngAfterContentInit(): void {
    this.cartSize=this.cart.cartSize();
  }
  //Called after ngOnInit when the component's or directive's content has been initialized.
  //Add 'implements AfterContentInit' to the class.
  


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.cartSize=this.cart.cartSize();
  }
  
  cartSize:number=0;

  constructor(private cart:CartService) { }

  ngOnInit() {
    this.cartSize=this.cart.cartSize();
  }

}
