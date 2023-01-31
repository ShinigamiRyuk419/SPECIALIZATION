import { Component } from '@angular/core';

declare var showSlides: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isHomedisable = false;
  ngOnInit() {
    new showSlides();
  }
  clickhometab(){
    this.isHomedisable = true;
  }
}
