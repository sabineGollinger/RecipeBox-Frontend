import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'category',
  pure: true
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    let category;
    switch (value) {
      case 'Cake':
        category = 'Cakes';
        break;
      case 'Main':
        category = 'Mains';
        break;
      case 'Drink':
        category = 'Drinks';
        break;
      default:
        category = 'something delicious';
    }
    return category;
  }
}
