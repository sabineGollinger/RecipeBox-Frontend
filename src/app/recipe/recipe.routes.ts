import {Routes} from '@angular/router';
import {RecipeSearchComponent} from './recipe-search/recipe-search.component';
import {RecipeComponent} from "./recipe.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
export const RECIPE_ROUTES: Routes = [
  {
    path: 'recipe',
    component: RecipeComponent,
    children: [
      {
        path: 'recipe-search',
        component: RecipeSearchComponent
      },
      {
        path: 'recipe-edit/:id',
        component: RecipeEditComponent
      }
    ]
  }
  /*,
  {
    path: 'recipe-add',
    component: RecipeAddComponent
  }
  */
];
