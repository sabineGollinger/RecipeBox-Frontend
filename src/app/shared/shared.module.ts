import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RolePipe} from "./pipes/role.pipe";
import {CategoryPipe} from "./pipes/category.pipe";
import {CategoryValidationDirective} from "./validation/category-validation.directive";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RolePipe,
    CategoryPipe,
    CategoryValidationDirective
  ],
  exports:
  [
    RolePipe,
    CategoryPipe,
    CategoryValidationDirective
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
})
export class SharedModule { }
