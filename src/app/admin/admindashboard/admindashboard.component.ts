import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  ProductArray : any[] = [];
  isResultLoaded = false;

  ngOnInit(){}

  constructor(private http: HttpClient )
  {
    this.getAllpost();
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
}
