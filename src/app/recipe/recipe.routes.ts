import {Routes} from '@angular/router';
import {RecipeSearchComponent} from './recipe-search/recipe-search.component';
export const RECIPE_ROUTES: Routes = [
  {
    path: 'recipe-search',
    component: RecipeSearchComponent
  }
  /*,
  {
    path: 'recipe-add',
    component: RecipeAddComponent
  }
  */
];
