import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Recipe} from "../../entities/recipe";

@Injectable()
export class RecipeService {


  recipes: Array<Recipe> = [];
  selectedRecipe: Recipe;
  message: string;
  constructor(private http: HttpClient) {
  }
  findByName(name: string): Observable<Recipe[]> {
    // let url = 'http://www.angular.at/api/flight';
    let url = 'http://localhost:8080/recipes/search/findByName/';                               // IMPLEMENTIERUNG!!!!
    let headers = new HttpHeaders() .set('Accept', 'application/json');
    let params = new HttpParams() .set('name', name);
    return this.http.get<Recipe[]>(url, {headers, params});
  }

  findById(id: string): Observable<Recipe> {
    // const url = 'http://www.angular.at/api/flight';
    const url = 'http://localhost:8080/recipes/search/findById/';                            // IMPLEMENTIERUNG!!!!
    const params = new HttpParams()
      .set('id', id);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Recipe>(url, { params, headers});
  }

  findByCategory(category: string): Observable<Recipe> {
    // const url = 'http://www.angular.at/api/flight';
    const url = 'http://localhost:8080/recipes/search/findByCategory/';                            // IMPLEMENTIERUNG!!!!
    const params = new HttpParams()
      .set('category', category);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Recipe>(url, { params, headers});
  }
  save(r: Recipe): Observable<Recipe> {
    const url = 'http://www.angular.at/api/flight';
    // const url = '!!!! --- TO BE IMPLEMENTED --- !!!!';                            // IMPLEMENTIERUNG!!!!
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.post<Recipe>(url, r, { headers});
  }

  findAllRecipes(): Observable<Recipe[]> {

    let url = 'http://localhost:8080/recipes';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this
      .http
      .get<Recipe[]>(url, {headers});
  }

/*
  save(recipe: Recipe): Observable<Recipe> {
    let url = 'http://www.angular.at/api/flight';
    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http
      .post<Recipe>(url, this.selectedRecipe, {headers})
      .subscribe(
        recipe => {
          this.selectedRecipe = recipe;
          this.message = "Rezept erfolgreich gespeichert!";
        },
        errResponse => {
          console.error('Fehler beim Speichern, errResponse');
          this.message = "Fehler beim Speichern! Da hat wohl jemand den Kochlöffel fallen gelassen!";
        });
    return this.http.post<Recipe>(url, recipe, { headers});
  }
  */
}
