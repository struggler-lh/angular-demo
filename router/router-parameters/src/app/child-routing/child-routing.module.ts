import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { Component7Component } from '../component7/component7.component';

const childRoutes: Routes = [
    {
      path: 'component8',
      component: Component7Component
       
    }
];

@NgModule({
  imports: [
   [ RouterModule.forChild(childRoutes) ]
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    Component7Component
  ]
})
export class ChildRoutingModule { }
