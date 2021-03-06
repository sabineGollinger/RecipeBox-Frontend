import {Routes} from '@angular/router';
import {RecipeSearchComponent} from './recipe-search/recipe-search.component';
import {RecipeComponent} from "./recipe.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeShowComponent} from "./recipe-show/recipe-show.component";
import {RecipeAddComponent} from "./recipe-add/recipe-add.component";
import {RecipeDeleteComponent} from "./recipe-delete/recipe-delete.component";
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
      },
      {
        path: 'recipe-show/:id',
        component: RecipeShowComponent
      },
      {
        path: 'recipe-add',
        component: RecipeAddComponent
      },
      {
        path: 'recipe-delete/:id',
        component: RecipeDeleteComponent
      },
    ]
  }
];
