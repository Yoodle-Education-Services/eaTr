import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SLPopupComponent } from './slpopup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SLPopupComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [SLPopupComponent]
})
export class SLPopUpModule { }