// là nơi khai báo các router
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //forRoot chọc đến các router bên trong để quản lý
  exports: [RouterModule]
})
export class AppRoutingModule { }
