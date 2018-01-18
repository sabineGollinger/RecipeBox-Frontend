

import {Component, Input} from "@angular/core";

@Component({
  selector: 'recipe-validation-errors',
  templateUrl: './recipe-validation-errors.component.html',
  styleUrls: ['./recipe-validation-errors.component.css']
})
export class RecipeValidationErrorsComponent { //implements OnInit {

  @Input() errors: Array<string>;


  constructor() { }

  ngOnInit() {
  }

}

