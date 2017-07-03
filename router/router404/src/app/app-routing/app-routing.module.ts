import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { NotFount404Component } from '../not-fount-404/not-fount-404.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {path: '**', component: NotFount404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent, ServicesComponent, NotFount404Component]
})
export class AppRoutingModule { }
