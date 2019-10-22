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
import {LayoutModule} from "./_layouts/layout.module";
import {AuthModule} from "./_modules/auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    // LayoutModule,
    BrowserAnimationsModule,
    LayoutModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
