import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FrameworkComponent } from './framework.component';

@NgModule({
  declarations: [
    FrameworkComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class FrameworkModule { }