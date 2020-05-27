import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FrameworkComponent } from './framework/framework.component';
import { FullRecipeComponent } from './full-recipe/full-recipe.component';
import { MenuBodyComponent } from './menu-body/menu-body.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    FrameworkComponent,
    FullRecipeComponent,
    MenuBodyComponent,
    TitleBarComponent,
    SidebarComponent,
    NewRecipeComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
