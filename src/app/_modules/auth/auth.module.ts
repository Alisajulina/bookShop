import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {AuthRoutingModule} from "./auth-routing.module";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../../material/material.module";
import {LoginComponent} from "./pages/login/login.component";




@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    AuthRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class AuthModule {}
