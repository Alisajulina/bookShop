import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutModule} from "./_layouts/layout.module";
import {AuthModule} from "./_modules/auth/auth.module";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import { GestureConfig } from '@angular/material/core';
import {MaterialModule} from "./material/material.module";


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
    AuthModule,
    MaterialModule


  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
