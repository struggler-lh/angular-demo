import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';
import { Component3Component } from '../component3/component3.component';
import { Component4Component } from '../component4/component4.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { Component5Component } from '../component5/component5.component';
import { Component6Component } from '../component6/component6.component';

const childRoutes: Routes = [
    {
      path: 'component4',
      component: Component4Component,
       children: [
        {
          path: 'component5',
          component: Component5Component,
          children: [
            {
              path: ':id',
              component: Component6Component
            },
            {
              path: '',
              component: Component6Component
            }
          ]
        }
      ]
    }
];

const routes: Routes = [
       {
        path: 'component1',
        component: Component1Component
      },
      {
        path: 'component2',
        component: Component2Component
      },
      {
        path: 'component3',
        component: Component3Component
      },
      {
        path: 'component/:id',
        component: Component4Component
      },
      {
        path: 'component4',
        component: Component4Component
      },
      {
        path: '',
        redirectTo: '/component3',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundComponent
      }
];

@NgModule({
    imports: [
    [ RouterModule.forRoot(routes), RouterModule.forChild(childRoutes) ]
    ],
    declarations: [],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
