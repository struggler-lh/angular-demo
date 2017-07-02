import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { ProductsComponent } from '../products/products.component';
import { Router404Component } from '../router404/router404.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'products', component: ProductsComponent},
    {path: '**', component: Router404Component}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [HomeComponent, ServicesComponent, ProductsComponent, Router404Component],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
