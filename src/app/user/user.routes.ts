import {Routes} from "@angular/router";
import {UserSearchComponent} from "./user-search/user-search.component";
export const USER_ROUTES: Routes = [
  {
    path: 'user-search',
    component: UserSearchComponent
  }
  /*,
  {
    path: 'user-add',
    component: UserAddComponent
  }
  */
];
