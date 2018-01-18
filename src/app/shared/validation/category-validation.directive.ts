import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[category]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CategoryValidationDirective,
    multi: true
  }]
})
export class CategoryValidationDirective implements Validator {

  constructor() { }

  @Input() category: string[];

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value && this.category.indexOf(c.value) === -1) {
      return {
        category: {
          actualValue: c.value,
          validCities: this.category
        }
      };
    }
    return { };
  }
}
