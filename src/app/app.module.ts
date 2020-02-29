import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxSignaturepadModule } from 'projects/ngx-signaturepad/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSignaturepadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
