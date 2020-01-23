import { Products } from './products';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string='http://localhost:8080/product/api/';

  constructor(private http:HttpClient) { }
  

  public getProductsByCategoryId(id):Observable<Products[]>{
      const url=this.baseUrl+'category/'
      return this.http.get<Products[]>(url+id);
  }

  public getProductById(id):Observable<Products>{
      return this.http.get<Products>(this.baseUrl+id);
  }

}
