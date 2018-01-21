import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Recipe} from "../../entities/recipe";

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html'
})
export class RecipeCardComponent { // } implements OnInit {
  constructor() { }
  @Input() item: Recipe;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  ngOnInit() {
  }

}
