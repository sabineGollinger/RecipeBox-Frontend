import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Recipe} from '../../entities/recipe';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe-search/recipe.service';

@Component({
  selector: 'recipe-show',
  templateUrl: './recipe-show.component.html',
  styleUrls: ['./recipe-show.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RecipeShowComponent { // implements OnInit {

  id: string;
  showDetails: string;
  recipe: Recipe;
  errors: string;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService) {}
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.showDetails = params['showDetails'];

        this.recipeService.findById(this.id).subscribe(
          recipe => {this.recipe = recipe; this.errors = '';},
          err => {this.errors = 'Fehler beim Laden - jemand hat das Kochbuch verlegt'; }
        );
      }
    );
  }
}
