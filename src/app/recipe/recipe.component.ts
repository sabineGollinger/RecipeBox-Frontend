import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
