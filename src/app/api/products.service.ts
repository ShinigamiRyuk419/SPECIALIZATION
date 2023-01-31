import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getproduct(){
    return this.http.get("http://localhost:3000/posts")
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  getfruits(){
    return this.http.get("http://localhost:3000/posts?categoryId=1")
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  getveges(){
    return this.http.get("http://localhost:3000/posts?categoryId=2")
    .pipe(map((res: any)=>{
      return res;
    }))
    
  }
  getflower(){
    return this.http.get("http://localhost:3000/posts?categoryId=3")
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  getrequest(){
    return this.http.get("http://localhost:3000/Supplier")
    .pipe(map((res: any)=>{
      return res;
    }))
  }
}
