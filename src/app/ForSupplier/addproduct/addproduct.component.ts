import { Component } from '@angular/core';

declare var showPreview:any ;

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  ngOnInit() {
    new showPreview();
  }
}
