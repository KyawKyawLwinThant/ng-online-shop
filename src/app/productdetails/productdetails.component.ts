import { Products } from './../products';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpService) { }
  
  products:Products={id:0,name:'',
    price:0.0,quantity:0,
    lastUpdated:new Date(),
    buyQuantity:0,balancePrice:0};

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

}
