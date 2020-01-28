import { Observable } from 'rxjs';
import { CartService } from './../cart.service';
import { Products } from './../products';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
  

 

  constructor(private route:ActivatedRoute,private http:HttpService,
   private cart:CartService,private router:Router) { 

   }
  
  products:Products;

  ngOnInit() {
    let id=0; 
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
        id=parseInt(paramMap.get('id'));
    })
     
    this.http.getProductById(id)
      .subscribe(data =>{
        this.products=data;

        console.log(data)
      e =>{
        console.log(e)
      }
      })
      
  }
  
  

  public addToCart(){
    let id=0; 
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
        id=parseInt(paramMap.get('id'));
    })
     
    this.http.getProductById(id)
      .subscribe(data =>{
        this.products=data;

        console.log(data)
      e =>{
        console.log(e)
      }
      })
    
    this.cart.addToCart(this.products);
    
    
   // console.log('Cart Size:'+this.size);
  }

  public continueShopping(){
      this.router.navigate(['/home']);
  }

  public cartSize(){
    let size=0;
    if(this.cart!==null){
     this.cart.cartSize().subscribe(data =>{
        size =data;
     })
    }
    
     return size;
  }

  public viewCart(){
      this.router.navigate(['/cartView']);
  }

}
