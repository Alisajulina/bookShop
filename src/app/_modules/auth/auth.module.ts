import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginComponent } from './pages/login/login.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    LoginComponent,

  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    AuthRoutingModule,
    FormsModule,
  ]
})
export class AuthModule {}
