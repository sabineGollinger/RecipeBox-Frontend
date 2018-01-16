import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {RecipeSearchComponent} from './recipe-search/recipe-search.component';
import {RECIPE_ROUTES} from './recipe.routes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

    RouterModule.forChild(RECIPE_ROUTES)

  ],
  declarations: [
    RecipeSearchComponent
  ],
  providers: [
  ],
  exports: [
    RecipeSearchComponent
  ]
})
export class RecipeModule { }
