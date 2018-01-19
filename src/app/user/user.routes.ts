import {Routes} from "@angular/router";
import {UserSearchComponent} from "./user-search/user-search.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserAddComponent} from "./user-add/user-add.component";
export const USER_ROUTES: Routes = [
  {
    path: 'user-search',
    component: UserSearchComponent
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent
  },
  {
    path: 'user-add',
    component: UserAddComponent
  }
];
