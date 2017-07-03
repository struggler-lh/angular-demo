import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { ProductsComponent } from '../products/products.component';
import { ProductDetailParamComponent } from '../product-detail-param/product-detail-param.component';

const routes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'product/:id', component: ProductDetailParamComponent, data: {inStock: false}}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
    declarations: [HomeComponent, ServicesComponent, ProductsComponent, ProductDetailParamComponent],
    exports: [RouterModule],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
