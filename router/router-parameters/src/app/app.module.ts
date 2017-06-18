import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router'; //路由-1

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { Component5Component } from './component5/component5.component';
import { Component6Component } from './component6/component6.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
     NotFoundComponent,
     Component5Component,
     Component6Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,//路由-2
    ////路由-1
  //   RouterModule.forRoot([
  //     {
  //       path: 'component1',
  //       component: Component1Component
  //     },
  //     {
  //       path: 'component2',
  //       component: Component2Component
  //     },
  //     {
  //       path: 'component3',
  //       component: Component3Component
  //     },
  //     {
  //       path: 'component/:id',
  //       component: Component4Component
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/component3',
  //       pathMatch: 'full'
  //     }
  //   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
