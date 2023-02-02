import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { CartService } from 'src/app/api/cart.service';
import { ProductsService } from 'src/app/api/products.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  public products!:any[];
  public grandtotal:number =0;
    
  constructor(private cart: CartService,private toast: NgToastService, private pro: ProductsService){}

  ngOnInit(): void {
    this.cart.getproduct().subscribe(res=>{
      this.products = res;
      this.grandtotal =this.cart.gettotalprice();
    })
  }

  emptycart(){
    this.toast.warning({detail:"deleted all from basket", summary: 'all items have been deleted', duration:3000});
    this.cart.removeallcart();
  }

  delete(item: any){
    this.toast.warning({detail:"deleted from basket", summary: 'item has been deleted', duration:2000});
    this.cart.removecartitem(item)
  }
}
