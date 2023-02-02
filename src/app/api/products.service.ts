import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productlist = new BehaviorSubject<any>([]);
  public cartitemlist:any=[]

  constructor(private http:HttpClient) { }

  getproduct(){
    // return this.http.get("http://localhost:8000/api/products")
    return this.http.get("http://localhost:3000/posts")
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  getfruits(){
    return this.http.get("http://localhost:3000/posts?category=fruit")
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  getveges(){
    return this.http.get("http://localhost:3000/posts?category=vegetable")
    .pipe(map((res: any)=>{
      return res;
    }))
    
  }
  getflower(){
    return this.http.get("http://localhost:3000/posts?category=flower")
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  getrequest(){
    return this.http.get("http://localhost:3000/request")
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  setDelete(data: any)
  {


    this.http.delete("http://localhost:3000/request"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Deleted")
        this.getrequest();

    });

  }

  //total price
  // gettotalprice(): number{
  //   let grandtotal =0;
  //   this.cartitemlist.map((a: any)=>{
  //     grandtotal += a.total;
  //     console.log(grandtotal);
  //   })
  //   return grandtotal;

  // }

  // // empty cart or delete all
  // removeallcart(){
  //   this.cartitemlist=[];
  //   this.productlist.next(this.cartitemlist);
  // }

  // removecartitem(product:any){
  //   this.cartitemlist.map((a:any, index:any )=>{
  //     if (product.id === a.id)
  //     this.cartitemlist.splice(index,1)
  //   })
  //   this.productlist.next(this.cartitemlist);
  // }
}
