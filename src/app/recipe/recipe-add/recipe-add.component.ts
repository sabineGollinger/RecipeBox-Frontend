import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {RecipeService} from "../recipe-search/recipe.service";
import {Recipe} from "../../entities/recipe";
import {User} from "../../entities/user";
import {AuthService} from "../../shared/auth/auth.service";

@Component({
  selector: 'recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent {

  recipeAddForm: FormGroup;
  id: string;

  loginUser: User;
  loginUserRole: String;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router) {

  }

  ngOnInit() {
    this.loginUser = this.authService.loginUser;
    this.loginUserRole = this.authService.loginUserRole;
    console.log(this.loginUser);
    this.recipeAddForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      category: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      ingredient:  ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      preparation:  ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      hint:  ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      user:  [this.loginUser, Validators.compose([Validators.required])]
    });

    console.log(this.recipeAddForm.value);
    console.log(this.recipeAddForm.valid);
    console.log(this.recipeAddForm.touched);
    console.log(this.recipeAddForm.dirty);

    }

  create(): void {
    this.recipeService
      .createRecipe(this.recipeAddForm.value).subscribe(
      (recipe: Recipe) => {
        console.log("Rezept erstellt");
        this.router.navigate(['/recipe-search']);
      },
      (err) => {
        console.error('Loading Error', err);
      }
    );

  }
}
