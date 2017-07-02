import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ChatComponent } from '../chat/chat.component';


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'chat', component: ChatComponent, outlet: 'aux'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [
    HomeComponent,
    ChatComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
