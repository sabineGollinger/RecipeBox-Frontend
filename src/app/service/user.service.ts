import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../entities/user";
import {HttpHeaders} from "@angular/common/http";
import {HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

  users: Array<User> = [];

  constructor(private http: HttpClient) {
  }

  findByFirstnameAndLastname(firstname: string, lastname: string): Observable<User[]> {

    let url = 'http://localhost:8080/users/search/findByFirstnameAndLastname/';
    let headers = new HttpHeaders().set('Accept', 'application/json');
    let params = new HttpParams()
      .set('firstname', firstname)
      .set('lastname', lastname);

    return this
      .http
      .get<User[]>(url, {headers,params});
  }

  findAllUsers(): Observable<User[]> {

    let url = 'http://localhost:8080/users';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this
      .http
      .get<User[]>(url, {headers});
  }

  findById(id: string)  {

    let url = 'http://localhost:8080/users/search/findById/';
    let headers = new HttpHeaders().set('Accept', 'application/json');
    let params = new HttpParams()
      .set('id', id);

    return this
      .http
      .get<User>(url, {headers,params});
  }

  createUser(user: User) {

    console.log(user);

    let url = 'http://localhost:8080/users';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this
      .http
      .post(url, user, {headers});
  }

  updateUser(user: User) {

    console.log(user);

    let url = 'http://localhost:8080/users/' + user.id;
    console.log(url);
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this
      .http
      .put(url, user, {headers});
  }

  deleteUser(id: number) {

    console.log(id);

    let url = 'http://localhost:8080/users/' + id;
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this
      .http
      .delete(url, {headers});
  }
}
