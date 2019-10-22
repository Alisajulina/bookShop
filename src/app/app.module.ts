import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './_modules/error-page/error-page.component';
import {FlexModule} from "@angular/flex-layout";
import { NavComponent } from './_layouts/nav/nav.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { LayoutModule } from "./_layouts/layout.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    // LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
