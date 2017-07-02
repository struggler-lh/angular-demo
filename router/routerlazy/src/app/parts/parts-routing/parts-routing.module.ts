import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PartsComponent } from '../parts/parts.component';

const routes: Routes = [
    {path: '', component: PartsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PartsComponent],
  exports: [RouterModule]
})
export class PartsRoutingModule { }
