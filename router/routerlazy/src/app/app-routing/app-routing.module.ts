import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'product', component: ProductComponent},
    {path: 'parts', loadChildren: '../parts/parts.module#PartsModule'}//懒加载
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
      HomeComponent,
      ProductComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
