import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from '../../entities/user';
import {RecipeService} from './recipe.service';
import {Recipe} from '../../entities/recipe';
import {AuthService} from "../../shared/auth/auth.service";



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
  user: User;

  recipes: Array<Recipe> = [];
  selectedRecipe: Recipe;

  basket: object = { };

  loginUser: User;
  loginUserRole: String;


  constructor(
    private authService: AuthService,
    private recipeService: RecipeService) {
    this.showAll();
  }

  ngOnInit() {
    this.loginUser = this.authService.loginUser;
    this.loginUserRole = this.authService.loginUserRole;
    console.log(this.selectedRecipe);
  }
/*
  searchByUser(): void {
    this.recipeService
      .findByUser(this.user)
      .subscribe(
        (recipes) => {
          this.recipes = recipes['_embedded']['recipes'];
          console.log(this.recipes);
        },
        (errResp) => {
          console.error('Error loading recipes', errResp);
        }
      );
  }
  */
  searchByNameOrCategory(): void {
    this.recipeService
      .findByNameOrCategory(this.name, this.category)
      .subscribe(
        (recipes) => {
          this.recipes = recipes['_embedded']['recipes'];
          console.log(this.recipes);
        },
        (errResp) => {
          console.error('Error loading recipes', errResp);
        }
      );
  }

  select(r: Recipe): void {
    this.selectedRecipe = r;
  }

  showAll(): void {
    this.recipeService
      .findAllRecipes()
      .subscribe(
        (recipes) => {
          this.recipes = recipes['_embedded']['recipes'];
        },
        (err) => {
          console.error('Fehler beim Laden - Kochbuch nicht gefunden', err);
        }
      );
  }
}
