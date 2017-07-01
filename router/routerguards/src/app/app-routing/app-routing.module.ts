import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { BillingComponent } from '../billing/billing.component';
import { AuthorizeGuard } from '../guards/authorize.guard';
import { UnsavedchangesGuard } from '../guards/unsavedchanges.guard';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'billing', component: BillingComponent, canActivate: [AuthorizeGuard], canDeactivate: [UnsavedchangesGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
      HomeComponent,
      BillingComponent
  ],
  exports: [RouterModule],
  providers: [
      AuthorizeGuard,
      UnsavedchangesGuard
  ]
})
export class AppRoutingModule { }
