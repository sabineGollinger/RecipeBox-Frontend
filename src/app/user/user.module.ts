import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {UserSearchComponent} from "./user-search/user-search.component";
import {RouterModule} from "@angular/router";
import {USER_ROUTES} from "./user.routes";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

    RouterModule.forChild(USER_ROUTES)

  ],
  declarations: [
    UserSearchComponent
  ],
  providers:[
  ],
  exports: [
    UserSearchComponent
  ]
})
export class UserModule { }
