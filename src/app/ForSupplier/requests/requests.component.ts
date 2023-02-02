import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from "ng-angular-popup";
import { ProductsService } from 'src/app/api/products.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  // public requestlist:any;
  ProductArray : any[] = [];
  isResultLoaded = false;

  s_name:string ="";
  email:string="";
  phone:string = "";
  address: string ="";
  productname: string ="";
  image: string ="";
  quantity: Number = 0;
  price: Number = 0;
  availability: string = "";
  category: string = "";
  status: string = "";


  currentProductID = "";
  constructor(private api: ProductsService,private toast: NgToastService, private http: HttpClient){
     this.getAllpost();
  }

  ngOnInit(): void {
    // this.api.getrequest().subscribe(res=>{
    //   this.requestlist = res;
    // })
  }

  getAllpost()//to show in the table request
  {

    this.http.get("http://localhost:3000/request").subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.ProductArray = resultData;
    });
  };

  setDelete(data: any)
  {


    this.http.delete("http://localhost:3000/request"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Request Deleted")
        this.getAllpost();

    });

  }
}
