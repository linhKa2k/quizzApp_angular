import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule  } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [ //là nơi quản lý các component
    AppComponent,
    DemoComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent
  ],  
  imports: [ // là nơi quản lý các thư viện
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [HttpClient], // là nơi quản lý các http, 
  bootstrap: [AppComponent] // là nơi quản lý component Tổng
})
export class AppModule { } 