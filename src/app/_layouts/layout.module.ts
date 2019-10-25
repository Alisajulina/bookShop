import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MaterialModule} from "../material/material.module";
import {LoginComponent} from "../_modules/auth/pages/login/login.component";


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    AngularFontAwesomeModule,
    TranslateModule,
    MaterialModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    HeaderComponent
  ],
  entryComponents: [LoginComponent ]
})
export class LayoutModule { }
