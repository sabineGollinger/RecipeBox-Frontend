import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {UserSearchComponent} from './user-search/user-search.component';
import {RecipeSearchComponent} from './recipe-search/recipe-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    UserSearchComponent,
    RecipeSearchComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
