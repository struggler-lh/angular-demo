import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { PartsComponent } from '../parts/parts.component';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {
        path: 'product/:id', component: ProductDetailComponent,
        children: [
            {path: '', component: ProductDescriptionComponent},
            {path: 'parts/:id', component: PartsComponent}
        ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [
    ServicesComponent,
    PartsComponent,
    ProductDescriptionComponent,
    HomeComponent,
    ProductDetailComponent
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
