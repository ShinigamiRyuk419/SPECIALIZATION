import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from "./components/cart/cart.component";
import { ProductsComponent } from "./components/products/products.component";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FruitComponent } from './components/fruit/fruit.component';
import { VegetableComponent } from './components/vegetable/vegetable.component';
import { FlowerComponent } from './components/flower/flower.component';
import { SupportComponent } from './components/support/support.component';
import { AllproductsComponent } from './ForSupplier/allproducts/allproducts.component';
import { AddproductComponent } from './ForSupplier/addproduct/addproduct.component';
import { RequestsComponent } from './ForSupplier/requests/requests.component';
import { LogregComponent } from './components/logreg/logreg.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { PostproductComponent } from './admin/postproduct/postproduct.component';
import { SupplierrequestComponent } from './admin/supplierrequest/supplierrequest.component';



const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'cart',component: CartComponent},
  {path:'about',component: AboutComponent},
  {path:'fruit',component: FruitComponent},
  {path:'vegetable',component: VegetableComponent},
  {path:'flower',component: FlowerComponent},
  {path:'support',component: SupportComponent},
  {path:'all',component: AllproductsComponent},
  {path:'addproduct',component: AddproductComponent},
  {path:'requests',component: RequestsComponent},
  {path:'logreg',component: LogregComponent},
  {path:'admindashboard',component: AdmindashboardComponent},
  {path:'orders',component: OrdersComponent},
  {path:'postproduct',component: PostproductComponent},
  {path:'supplierrequest',component: SupplierrequestComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
