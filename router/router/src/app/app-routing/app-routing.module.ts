import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';

const routes: Routes = [
        { path: "", component: HomeComponent },
        { path: "services", component: ServicesComponent }
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [HomeComponent, ServicesComponent]
})
export class AppRoutingModule { }
