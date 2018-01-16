import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from '../../entities/user';
import {RecipeService} from './recipe.service';
import {Recipe} from '../../entities/recipe';



@Component({
  selector: 'recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeSearchComponent { // implements OnInit {

  name: string;
  category: string;
  ingredient: string;
  preparation: string;
  hint: string;
  user: string;

  recipes: Array<Recipe> = [];
  selectedRecipe: Recipe;

  basket: object = {  };


  constructor(private recipeService: RecipeService) { }

  search(): void {
    this.recipeService
      .find(this.name, this.category)
      .subscribe(
        (recipes) => {
          this.recipes = recipes;
        },
        (errResp) => {
          console.error('Error loading recipes', errResp);
        }
      );
  }

  select(r: Recipe): void {
    this.selectedRecipe = r;
  }

  /*
  ngOnInit() {
  }
  */

}
