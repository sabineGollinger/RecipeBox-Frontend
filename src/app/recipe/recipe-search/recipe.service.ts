import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../../entities/recipe';
import {User} from "../../entities/user";


@Injectable()
export class RecipeService {

  recipes: Array<Recipe> = [];
  selectedRecipe: Recipe;
  message: string;
  constructor(private http: HttpClient) {
  }
  findByName(name: string): Observable<Recipe[]> {
    let url = 'http://localhost:8080/recipes/search/findByName/';
    let headers = new HttpHeaders() .set('Accept', 'application/json');
    let params = new HttpParams() .set('name', name);
    return this.http.get<Recipe[]>(url, {headers, params});
  }

  findById(id: string): Observable<Recipe> {
    const url = 'http://localhost:8080/recipes/search/findById/';
    const params = new HttpParams()
      .set('id', id);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Recipe>(url, { params, headers});
  }

  findByCategory(category: string): Observable<Recipe> {
    const url = 'http://localhost:8080/recipes/search/findByCategory/';
    const params = new HttpParams()
      .set('category', category);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Recipe>(url, { params, headers});
  }
  /*
  findByUser(user: User): Observable<Recipe> {
    const url = 'http://localhost:8080/recipes/search/findByUser/';
    const params = new HttpParams()
      .set('user', user);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Recipe>(url, { params, headers});
  }
  */
  findByNameOrCategory(name: string, category: string): Observable<Recipe> {
    const url = 'http://localhost:8080/recipes/search/findByNameOrCategory/';
    const params = new HttpParams()
      .set('name', name)
      .set('category', category);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Recipe>(url, { params, headers});
  }
  save(r: Recipe): Observable<Recipe> {
    const url = 'http://localhost:8080/recipes/';  // id fehlt                          // IMPLEMENTIERUNG!!!!
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    this.http
      .post<Recipe>(url, this.selectedRecipe, {headers})
      .subscribe(
        recipe => {
          this.selectedRecipe = recipe;
          this.message = 'Rezept erfolgreich gespeichert!';
        },
        errResponse => {
          console.error('Fehler beim Speichern, errResponse');
          this.message = 'Fehler beim Speichern!';
        });
    return this.http.post<Recipe>(url, r, { headers});
  }

  findAllRecipes(): Observable<Recipe[]> {
    let url = 'http://localhost:8080/recipes';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this
      .http
      .get<Recipe[]>(url, {headers});
  }

  createRecipe(recipe: Recipe) {
    console.log('Create' + recipe);
    console.log(recipe);

    let url = 'http://localhost:8080/recipes';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this
      .http
      .post(url, recipe, {headers});
  }

  updateRecipe(recipe: Recipe) {
    console.log('Update' + recipe);
    console.log(recipe);

    let url = 'http://localhost:8080/recipes/' + recipe.id;
    console.log(url);
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this
      .http
      .put(url, recipe, {headers});
  }

  deleteRecipe(id: number) {
    console.log('delete recipe' + id);
    console.log(id);

    let url = 'http://localhost:8080/recipes/' + id;
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this
      .http
      .delete(url, {headers});
  }
  goBack() {
    let url = 'http://localhost:8080/recipes';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http;
  }
}
