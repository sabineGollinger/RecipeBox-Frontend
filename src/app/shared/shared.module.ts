import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RolePipe} from "./pipes/role.pipe";
import {CategoryPipe} from "./pipes/category.pipe";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RolePipe,
    CategoryPipe
  ],
  exports:
    [
      RolePipe,
      CategoryPipe
    ]
})
export class SharedModule { }
