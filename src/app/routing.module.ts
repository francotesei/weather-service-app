import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import {BoardComponent } from './components/board/board.component';
import {LoginComponent } from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';


const appRoutes: Routes = [
  {path: 'boards/:userId',component:BoardComponent},
  {path: 'login',component:LoginComponent},
  {path: 'dashboard/:userId/:boardId',component:DashboardComponent},
  {path: '',redirectTo: '/login',pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging
    )


  ],
  declarations: [],

  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
