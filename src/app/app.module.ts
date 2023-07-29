import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {OwlModule} from 'ngx-owl-carousel';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
