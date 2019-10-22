import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    AngularFontAwesomeModule,
    TranslateModule,
  ],
  exports: [
    NavComponent
  ]
})
export class LayoutModule { }
