import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../entities/user";
import {Router} from "@angular/router";
import {Recipe} from "../../entities/recipe";
import {RecipeService} from "../recipe-search/recipe.service";
import {AuthService} from "../../shared/auth/auth.service";

@Component({
  selector: 'recipe-delete',
  templateUrl: './recipe-delete.component.html',
  styleUrls: ['./recipe-delete.component.css']
})
export class RecipeDeleteComponent {
  id: string;
  recipe: Recipe;
  errors: string;
  loginUser: User;
  loginUserRole: String;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) {

  }

  ngOnInit() {
    this.loginUser = this.authService.loginUser;
    this.loginUserRole = this.authService.loginUserRole;
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.recipeService
          .findById(this.id).subscribe(
          (recipes) => {
            this.recipe = recipes;
            console.log(this.recipe);
          },
          (err) => {
            console.error('Fehler beim Laden', err);
          }
        );
      }
    );
  }

  delete(): void {
    this.recipeService
      .deleteRecipe(this.recipe.id).subscribe(
      (recipe: Recipe) => {
        console.log("Rezept gelöscht");
        this.router.navigate(['../recipe/recipe-search']);
      },
      (err) => {
        console.error('Loading Error', err);
      }
    );
  }
}
