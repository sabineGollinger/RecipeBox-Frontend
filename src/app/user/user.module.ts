import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {UserSearchComponent} from "./user-search/user-search.component";
import {RouterModule} from "@angular/router";
import {USER_ROUTES} from "./user.routes";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserValidationErrorsComponent} from "./user-validation-errors/user-validation-errors.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {UserShowComponent} from "./user-show/user-show.component";
import {UserDeleteComponent} from "./user-delete/user-delete.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,

    RouterModule.forChild(USER_ROUTES)

  ],
  declarations: [
    UserSearchComponent,
    UserEditComponent,
    UserShowComponent,
    UserValidationErrorsComponent,
    UserAddComponent,
    UserDeleteComponent
  ],
  providers:[
  ],
  exports: [
    UserSearchComponent,
    UserEditComponent,
    UserAddComponent,
    UserShowComponent,
    UserDeleteComponent
  ]
})
export class UserModule { }
