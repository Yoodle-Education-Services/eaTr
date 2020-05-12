import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FrameworkComponent } from './framework/framework.component';
import { FullRecipeComponent } from './full-recipe/full-recipe.component';
import { MenuBodyComponent } from './menu-body/menu-body.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    FrameworkComponent,
    FullRecipeComponent,
    MenuBodyComponent,
    TitleBarComponent,
    SidebarComponent,
    ShoppingListComponent,
    HtmlLineBreaksPipe,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
