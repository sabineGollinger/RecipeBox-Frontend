import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RolePipe} from "./pipes/role.pipe";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RolePipe
  ],
  exports:
    [
      RolePipe
    ]
})
export class SharedModule { }
