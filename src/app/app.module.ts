import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { NgToastModule } from 'ng-angular-popup';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FruitComponent } from './components/fruit/fruit.component';
import { VegetableComponent } from './components/vegetable/vegetable.component';
import { FlowerComponent } from './components/flower/flower.component';
import { SupportComponent } from './components/support/support.component';
import { FooterComponent } from './components/footer/footer.component';
import { SheaderComponent } from './ForSupplier/sheader/sheader.component';
import { AllproductsComponent } from './ForSupplier/allproducts/allproducts.component';
import { AddproductComponent } from './ForSupplier/addproduct/addproduct.component';
import { Products1Component } from './components/products1/products1.component';
import { RequestsComponent } from './ForSupplier/requests/requests.component';
import { LogregComponent } from './components/logreg/logreg.component';
import { ReactiveFormsModule} from '@angular/forms';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { SupplierrequestComponent } from './admin/supplierrequest/supplierrequest.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { PostproductComponent } from './admin/postproduct/postproduct.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    HomeComponent,
    AboutComponent,
    FruitComponent,
    VegetableComponent,
    FlowerComponent,
    SupportComponent,
    FooterComponent,
    SheaderComponent,
    AllproductsComponent,
    AddproductComponent,
    Products1Component,
    RequestsComponent,
    LogregComponent,
    LogregComponent,
    AdmindashboardComponent,
    SupplierrequestComponent,
    OrdersComponent,
    PostproductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgToastModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
