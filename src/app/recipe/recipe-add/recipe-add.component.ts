import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {RecipeService} from "../recipe-search/recipe.service";
import {Recipe} from "../../entities/recipe";

@Component({
  selector: 'recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent {

  recipeForm: FormGroup;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
    private router: Router) {

  }

  ngOnInit() {
    this.recipeForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      category: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      ingredient:  ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      preparation:  ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      hint:  ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  create(): void {
    this.recipeService
      .createRecipe(this.recipeForm.value).subscribe(
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
