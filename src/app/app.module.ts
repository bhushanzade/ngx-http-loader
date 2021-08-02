import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxHttpLoaderModule } from 'ngx-http-loader';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxHttpLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
