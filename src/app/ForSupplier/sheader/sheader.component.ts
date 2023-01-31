import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sheader',
  templateUrl: './sheader.component.html',
  styleUrls: ['./sheader.component.css']
})
export class SheaderComponent implements OnInit {
  isSignedIn = false;
  public totalitem =0;
  constructor(private cart:CartService){}

  ngOnInit(): void {
    this.cart.getproduct().subscribe(res=>{
    this.totalitem = res.length;
    })
   
  }


}
