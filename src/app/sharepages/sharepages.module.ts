import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharepagesRoutingModule } from './sharepages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharepagesRoutingModule
  ]
})
export class SharepagesModule { }
