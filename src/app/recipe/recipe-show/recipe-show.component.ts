import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Recipe} from '../../entities/recipe';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe-search/recipe.service';
import {PdfmakeService} from '../pdfmake/pdfmake.service';

// import { PdfmakeService } from 'ng-pdf-make/pdfmake/pdfmake.service';

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
    private recipeService: RecipeService,
    private pdfmake: PdfmakeService) {}
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.showDetails = params['showDetails'];
        this.recipeService.findById(this.id).subscribe(
          recipe => {
            this.recipe = recipe; this.errors = '';

            // Configure PDF
            this.pdfmake.configureStyles({
              h1: { fontSize: 18, bold: true },
              h2: { fontSize: 14, bold: true },
              info: { fontSize: 12, color: '#71777C' } });
            this.pdfmake.addText(this.recipe.name, 'h1');
            this.pdfmake.addText(this.recipe.category, 'h2');
            this.pdfmake.addText('\n');
            this.pdfmake.addText('by ' + this.recipe.username.username, 'info')
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



/*
    // Add large text
    this.pdfmake.addText('this time a little bit longer to make sure, this line will be divided into at least two lines');

    // Array with colums
    const columns = [
      'Lorem ipsum 1',
      'Lorem ipsum 2',
    ];

    // Add columns
    this.pdfmake.addColumns(columns);

    // List to add
    const list1 = ['item 1', 'item 2', 'item 3'];
    const list2 = ['item 1', 'item 2', 'item 3'];
    const list3 = ['item 1', 'item 2', 'item 3'];
    const list4 = ['item 1', 'item 2', 'item 3'];

    // Adding unordered list
    this.pdfmake.addUnorderedlist(list1);

    // Adding ordered list
    this.pdfmake.addOrderedList(list2);

    // Adding reversed oredered list
    this.pdfmake.addOrderedList(list3, true);

    // Adding ordered list starting at 50
    this.pdfmake.addOrderedList(list4, false, 50);

    /*
    // Add image from url
    this.pdfmake.addImage('http://localhost:4200/src/assets/img/RecipeBox Logo.gif');

    // Add image from url using custom width and height.
    this.pdfmake.addImage('http://localhost:4200/src/assets/img/RecipeBox Logo.gif', 300, 150);

    // Add image from localhost and using width
    this.pdfmake.addImage('http://localhost:4200/src/assets/img/RecipeBox Logo.gif', 200);
*/
  }
}
