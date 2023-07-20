import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './HomeComponent/home.component';
import { LoaderComponent } from './LoaderComponent/loader.component';
import { LogoutComponent } from './LogoutComponent/logout.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LogoutComponent, LoaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
