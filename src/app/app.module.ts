import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  


import { SharepagesRoutingModule } from './sharepages/sharepages-routing.module';
import { SharepagesModule } from './sharepages/sharepages.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VeiculoModule } from './veiculo/veiculo.module';

@NgModule({
  declarations: [

    AppComponent,
    FooterComponent,
    NavbarComponent
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VeiculoModule,
    SharepagesRoutingModule,
    SharepagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }