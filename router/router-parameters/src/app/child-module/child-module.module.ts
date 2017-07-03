import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from '../child-routing/child-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChildRoutingModule
  ],
  declarations: []
})
export class ChildModuleModule { }
