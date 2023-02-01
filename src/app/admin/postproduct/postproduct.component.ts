import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postproduct',
  templateUrl: './postproduct.component.html',
  styleUrls: ['./postproduct.component.css']
})

export class PostproductComponent implements OnInit {
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

  getAllproducts()
  {

    this.http.get("http://127.0.0.1:8000/api/products").subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.ProductArray = resultData;
    });
  };

  // for posts
  getAllpost()
  {

    this.http.get("http://127.0.0.1:8000/api/posts").subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.ProductArray = resultData;
    });
  };

  register()
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
      "status": this.status

    };

    this.http.post("http://localhost:3000/posts",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Added Successfully")
        this.getAllproducts();
        this.s_name= '';
        this.email= '';
        this.phone= '';
        this.address = '';
        this.productname= '';
        this.image= '';
        this.quantity  = 0;
        this.price =0;
        this.availability ="";
        this.category ="";
        this.status =""
    });
  }
  savePost()
  {
    if(this.currentProductID == '')

       this.register();
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
    };

    this.http.put("http://127.0.0.1:8000/api/update"+ "/"+ this.currentProductID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Updated")
        this.getAllproducts();
        this.s_name= '';
        this.email= '';
        this.phone= '';
        this.address = '';
        this.productname= '';
        this.image= '';
        this.quantity  = 0;
        this.price =0;
        this.availability ="";
        this.category =""
    });
  };

  save()
  {
    if(this.currentProductID == '')

       this.UpdateRecords();
      }


}
