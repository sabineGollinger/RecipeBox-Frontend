import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'role',
  pure: true
})
export class RolePipe implements PipeTransform {
  transform(value: string): string {
    let role;
    switch(value) {
      case 'admin@recipes.at':
        role = 'A';
        break;
      default:
        role = 'U';
    }
    return role;
  }
}
