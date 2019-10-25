import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ProductActionsComponent } from './components/product-actions/product-actions.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductFlashWrapComponent } from './components/product-flash-wrap/product-flash-wrap.component';



@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [
  ProductActionsComponent,
  ProductInfoComponent,
  ProductFlashWrapComponent
  ],
  exports: [
    ProductActionsComponent,
    ProductInfoComponent,
    ProductFlashWrapComponent

  ],
  providers: [  ],
  entryComponents: [ ]
})
export class SharedModule {}
