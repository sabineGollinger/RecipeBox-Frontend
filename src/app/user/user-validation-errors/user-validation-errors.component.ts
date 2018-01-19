import {Component, Input} from "@angular/core";

@Component({
  selector: 'user-validation-errors',
  templateUrl: './user-validation-errors.component.html',
  styleUrls: ['./user-validation-errors.component.css']
})
export class UserValidationErrorsComponent { //implements OnInit {

  @Input() errors: Array<string>;


  constructor() { }

  ngOnInit() {
  }

}

