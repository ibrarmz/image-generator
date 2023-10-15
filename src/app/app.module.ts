import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGeneratorComponent } from './components/image-generator/image-generator.component';
import { NavComponent } from './components/nav/nav.component';
import { ErrorPopComponent } from './components/error-pop/error-pop.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGeneratorComponent,
    NavComponent,
    ErrorPopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
