import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FrameworkComponent } from './framework/framework.component';
import { FullRecipeComponent } from './full-recipe/full-recipe.component';
import { MenuBodyComponent } from './menu-body/menu-body.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    FrameworkComponent,
    FullRecipeComponent,
    MenuBodyComponent,
    TitleBarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
