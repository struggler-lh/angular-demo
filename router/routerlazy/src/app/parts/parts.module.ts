import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartsRoutingModule } from './parts-routing/parts-routing.module';

console.log("加载parts模块!");

@NgModule({
  imports: [
    CommonModule,
    PartsRoutingModule
  ],
  declarations: []
})
export class PartsModule { }
