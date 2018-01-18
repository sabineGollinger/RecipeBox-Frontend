import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RolePipe} from "./pipes/role.pipe";
import {CategoryPipe} from "./pipes/category.pipe";
import {CategoryValidationDirective} from "./validation/category-validation.directive";
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
    ]
})
export class SharedModule { }
