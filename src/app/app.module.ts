import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from "./_layouts/layout.module";
import {AuthModule} from "./_modules/auth/auth.module";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";

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
    BrowserAnimationsModule,
    LayoutModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
