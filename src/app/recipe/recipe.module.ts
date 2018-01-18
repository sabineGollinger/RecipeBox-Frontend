import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {RecipeSearchComponent} from './recipe-search/recipe-search.component';
import {RECIPE_ROUTES} from './recipe.routes';
import {RecipeCardComponent} from "./recipe-card/recipe-card.component";
import {RecipeService} from "./recipe-search/recipe.service";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeComponent} from "./recipe.component";
import {RecipeShowComponent} from "./recipe-show/recipe-show.component";
import {RecipeValidationErrorsComponent} from "./recipe-validation-errors/recipe-validation-errors.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

    RouterModule.forChild(RECIPE_ROUTES)
  ],
  declarations: [
    RecipeSearchComponent,
    RecipeCardComponent,
    RecipeEditComponent,
    RecipeComponent,
    RecipeShowComponent,
    RecipeValidationErrorsComponent
  ],
  providers: [
    RecipeService
  ],
  exports: [
    RecipeSearchComponent
  ]
})
export class RecipeModule { }
