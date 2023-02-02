import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare var showPreview:any ;


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
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
  status:string = "";
  currentProductID = "";

  constructor(private http: HttpClient )
  {
    this.getAllproducts();

  }

  ngOnInit() {
    new showPreview();
  }

  getAllproducts()
  {

    this.http.get("http://localhost:3000/request").subscribe((resultData: any)=>
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
      "status" : 'requested',

    };

    this.http.post("http://localhost:3000/request",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Request Submitted")
        this.getAllproducts();
        this.s_name= '';
        this.email= '';
        this.phone= '';
        this.address = '';
        this.productname= '';
        this.image= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXtpmpJdmkRsT-msQ524qCCTog_eHYB_2Kz31m6-kZffWhA5wpqpVgGa04HbzFIEcUWw&usqp=CAU';
        this.quantity  = 0;
        this.price = 0;
        this.availability = '';
        this.category = '';
        this.status ='requested';
    });
  }

  setUpdate(data: any)
  {
        this.s_name= data.s_name;
        this.email= data.email;
        this.phone= data.phone;
        this.address = data.address;
        this.productname= data.productname;
        this.image= data.image;
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
        this.quantity =0;
        this.price =0;
        this.availability ="";
        this.category =""
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
       this.UpdateRecords();
      }

  };

  setDelete(data: any)
  {


    this.http.delete("http://127.0.0.1:8000/api/delete"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Deleted")
        this.getAllproducts();

    });

  }




}
