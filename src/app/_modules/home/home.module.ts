import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {SharedModule} from "../../_shared";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularFontAwesomeModule,
    SharedModule
  ]
})
export class HomeModule {}
