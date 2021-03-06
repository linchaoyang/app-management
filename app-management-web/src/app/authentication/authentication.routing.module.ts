import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseComponent, LoginComponent, RegisterComponent} from './components';

const routes: Routes = [
  {
    path: 'pms',
    component: BaseComponent,
    children:[
      {
        path:'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
