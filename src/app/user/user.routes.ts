import {Routes} from "@angular/router";
import {UserSearchComponent} from "./user-search/user-search.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {UserShowComponent} from "./user-show/user-show.component";
import {UserDeleteComponent} from "./user-delete/user-delete.component";
import {AuthGuard} from "../shared/auth/auth.guard";
export const USER_ROUTES: Routes = [
  {
    path: 'user-search',
    component: UserSearchComponent
  },
  {
    path: 'user-show/:id',
    component: UserShowComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'user-add',
    component: UserAddComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'user-delete/:id',
    component: UserDeleteComponent,
    canActivate:[AuthGuard]
  }
];
