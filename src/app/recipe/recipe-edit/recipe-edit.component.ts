import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from '../../entities/recipe';
import {RecipeService} from '../recipe-search/recipe.service';

@Component({
  selector: 'recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit {

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
          recipe => {this.recipe = recipe; this.errors = ''; },
          err => {this.errors = 'Fehler beim Laden - aus der Crème brûlée wird leider nix'; }
        );
      }
    );
  }
  save() {
   this.recipeService.save(this.recipe).subscribe(
     recipe => {
       this.recipe = recipe;
       this.errors = 'Erfolgreich gespeichert - Gericht gelungen!';
     },
     err => { this.errors = 'Fehler beim Speichern - da hat wohl jemand das falsche Rezept'; }
   ) ;
  }
}
