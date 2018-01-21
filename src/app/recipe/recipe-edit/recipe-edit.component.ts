import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../../entities/recipe';
import {RecipeService} from '../recipe-search/recipe.service';
import {User} from "../../entities/user";
import {AuthService} from "../../shared/auth/auth.service";

@Component({
  selector: 'recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RecipeEditComponent implements OnInit {

  loginUser: User;
  loginUserRole: String;
  id: string;
  showDetails: string;
  recipe: Recipe;
  errors: string;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) {}
  ngOnInit() {
    this.loginUser = this.authService.loginUser;
    this.loginUserRole = this.authService.loginUserRole;
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.showDetails = params['showDetails'];

        this.recipeService.findById(this.id).subscribe(
          recipe => {this.recipe = recipe; this.errors = ''; },
          err => {this.errors = 'Fehler beim Laden - aus dieser Crème brûlée wird leider nix'; }
        );
      }
    );
  }
  save(): void {
    this.recipeService
      .updateRecipe(this.recipe).subscribe(
      (recipe) => {
        console.log("Rezept erfolgreich bearbeitet");
        this.router.navigate(['./recipe-search']);
      },
      (err) => {
        console.error('Loading Error', err);
      }

    );
  }
}
