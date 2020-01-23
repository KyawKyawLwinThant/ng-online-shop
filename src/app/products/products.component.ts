import { Products } from './../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpService) { }
  
  products:Products[]=[];
  imageUrl='../../assets/images/'

  ngOnInit() {
    let id:number=0;
    this.route.paramMap.subscribe((param:ParamMap)=>{
      id=parseInt(param.get('id'));
    })

    console.log("category id:"+ id);

    this.http.getProductsByCategoryId(id)
      .subscribe(data =>{
        this.products=data,
        e =>{
          console.log(e)
        }
      })
  }

}
