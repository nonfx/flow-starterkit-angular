import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './BodySection/mainbody.component';
import { LayoutComponent } from './Layout/layout.component';
import { MenuComponent } from './MenuPopover/menu.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, BodyComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, LayoutComponent, BodyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
