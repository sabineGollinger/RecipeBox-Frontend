import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {RecipeSearchComponent} from './recipe-search/recipe-search.component';
import {UserService} from "./service/user.service";
import {RolePipe} from "./shared/pipes/role.pipe";
import {UserModule} from "./user/user.module";
import {SharedModule} from "./shared/shared.module";
import {HomeComponent} from "./home/home.component";
import {APP_ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    UserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    RecipeSearchComponent,
    HomeComponent
  ],
  providers: [
    { provide: UserService, useClass: UserService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
