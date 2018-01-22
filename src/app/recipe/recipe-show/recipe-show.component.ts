import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Recipe} from '../../entities/recipe';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe-search/recipe.service';
import {PdfmakeService} from '../pdfmake/pdfmake.service';
import {User} from "../../entities/user";
import {AuthService} from "../../shared/auth/auth.service";


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

  loginUser: User;
  loginUserRole: string;
  username: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private pdfmake: PdfmakeService) {  }
  ngOnInit() {
    this.loginUser = this.authService.loginUser;
    this.loginUserRole = this.authService.loginUserRole;

    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.showDetails = params['showDetails'];
        this.recipeService.findById(this.id).subscribe(
          recipe => {
            this.recipe = recipe; this.errors = '';

            // Configure PDF
              this.pdfmake.configureStyles({
                h1: {fontSize: 18, bold: true},
                h2: {fontSize: 14, bold: true},
                info: {fontSize: 12, color: '#71777C'}
              });
              this.pdfmake.addText(this.recipe.name, 'h1');
              this.pdfmake.addText(this.recipe.category, 'h2');
              this.pdfmake.addText('\n\n');
              this.pdfmake.addText('Ingredients', 'h2');
              this.pdfmake.addText('\n');
              this.pdfmake.addText(this.recipe.ingredient);
              this.pdfmake.addText('\n\n');
              this.pdfmake.addText('Preparation', 'h2');
              this.pdfmake.addText('\n');
              this.pdfmake.addText(this.recipe.preparation);
              this.pdfmake.addText('\n\n');
              this.pdfmake.addText('Hints', 'h2');
              this.pdfmake.addText('\n');
              this.pdfmake.addText(this.recipe.hint);
              this.pdfmake.addText('\n\n\n');
              this.pdfmake.addText('Recipe downloaded from', 'info');
              this.pdfmake.addText('\n');
              this.pdfmake.addImage('./assets/img/RecipeBox Logo.gif', 150);

          },
          err => {this.errors = 'Fehler beim Laden - jemand hat das Kochbuch verlegt'; }
        );
      }
    );
  }
}
