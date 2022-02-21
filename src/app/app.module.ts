import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticatorModule } from 'my-authenticator-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
