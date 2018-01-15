import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Flight} from "../../entities/flight";
import {Observable} from "rxjs/Observable";
import {Recipe} from "../entities/recipe";

@Injectable()
export class RecipeService {
  constructor(private http: HttpClient) {
  }
  find(name: string, category: string): Observable<Recipe[]> {
    //let url = 'http://www.angular.at/api/flight';
    let url = '!!!! --- TO BE IMPLEMENTED --- !!!!';                               // IMPLEMENTIERUNG!!!!
    let headers = new HttpHeaders() .set('Accept', 'application/json');
    let params = new HttpParams() .set('name', name) .set('category', category);
    return this.http.get<Recipe[]>(url, {headers, params})
  }

  findById(id: string): Observable<Recipe> {
   // const url = 'http://www.angular.at/api/flight';
    const url = '!!!! --- TO BE IMPLEMENTED --- !!!!';                            // IMPLEMENTIERUNG!!!!
    const params = new HttpParams()
      .set('id', id);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Recipe>(url, { params, headers});
  }


  save(r: Recipe): Observable<Recipe> {
    //const url = 'http://www.angular.at/api/flight';
    const url = '!!!! --- TO BE IMPLEMENTED --- !!!!';                            // IMPLEMENTIERUNG!!!!
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.post<Recipe>(url, r, { headers});
  }
}