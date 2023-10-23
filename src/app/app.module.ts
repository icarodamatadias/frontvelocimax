import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  
import { VeiculoRoutingModule } from './veiculo/veiculo-routing.module';

import { SharepagesRoutingModule } from './sharepages/sharepages-routing.module';
import { SharepagesModule } from './sharepages/sharepages.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

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
    VeiculoRoutingModule,
    SharepagesRoutingModule,
    SharepagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }