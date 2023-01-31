import { Component, OnInit } from '@angular/core';
import { NgToastService } from "ng-angular-popup";
import { ProductsService } from 'src/app/api/products.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  public requestlist:any;
  constructor(private api: ProductsService,private toast: NgToastService){}

  ngOnInit(): void {
    this.api.getrequest().subscribe(res=>{
      this.requestlist = res;
    })
  }
}
