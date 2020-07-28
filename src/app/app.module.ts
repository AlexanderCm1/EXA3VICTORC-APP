import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms'; 
import {routing,appRoutingProviders} from './app.routing';


import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
