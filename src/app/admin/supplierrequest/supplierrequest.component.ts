import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supplierrequest',
  templateUrl: './supplierrequest.component.html',
  styleUrls: ['./supplierrequest.component.css']
})
export class SupplierrequestComponent implements OnInit {
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

  ngOnInit() {

  }

  constructor(private http: HttpClient )
  {
    this.getAllproducts();
    this.getAllpost();
  };

  getAllproducts() // for posts
  {

    this.http.get("http://localhost:3000/posts").subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.ProductArray = resultData;
    });
  };

 
  getAllpost()//to show in the table request
  {

    this.http.get("http://localhost:3000/request?status=requested").subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.ProductArray = resultData;
    });
  };

  register()
  {

    let bodyData = {
      // "s_name" : this.s_name,
      // "email" : this.email,
      // "phone" : this.phone,
      // "address" : this.address,
      "productname" : this.productname,
      "image" : this.image,
      "quantity" : this.quantity,
      "price" : this.price,
      "availability" : this.availability,
      "category" : this.category,
      "status": this.status

    };

    this.http.post("http://localhost:3000/posts",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Added Successfully")
        this.getAllproducts();
        // this.s_name= '';
        // this.email= '';
        // this.phone= '';
        // this.address = '';
        this.productname= '';
        this.image= '';
        this.quantity  = 0;
        this.price =0;
        this.availability ="";
        this.category ="";
        this.status =""
    });
  }



  // to update product request
  setUpdate(data: any)
  {
        this.s_name= data.s_name;
        this.email= data.email;
        this.phone= data.phone;
        this.address = data.address;
        this.productname=data.productname;
        this.image= '';
        this.quantity  = data.quantity;
        this.price = data.price;
        this.availability = data.availability;
        this.category = data.category;
        this.category = data.status;
        this.currentProductID = data.id
  };

  UpdateRecords()
  {
    let bodyData = {
      "s_name" : this.s_name,
      "email" : this.email,
      "phone" : this.phone,
      "address" : this.address,
      "productname" : this.productname,
      "image" : this.image,
      "quantity" : this.quantity,
      "price" : this.price,
      "availability" : this.availability,
      "category" : this.category,
      "status" : this.status
    };

    this.http.put("http://localhost:3000/request"+ "/"+ this.currentProductID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Updated")
        this.getAllpost();
        this.s_name= '';
        this.email= '';
        this.phone= '';
        this.address = '';
        this.productname= '';
        this.image= '';
        this.quantity  = 0;
        this.price =0;
        this.availability ="";
        this.category ="",
        this.status =""
    });
  };

  save()
  {
    if(this.currentProductID == '')
    {
        this.register();
    }
      else
      {
        this.register();
       this.UpdateRecords();
      }

  };
}
