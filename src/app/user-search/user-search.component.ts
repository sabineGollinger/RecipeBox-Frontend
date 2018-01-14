import {Component} from "@angular/core";
import {User} from "../entities/user";
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {HttpParams} from "@angular/common/http";

@Component ({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})

export class UserSearchComponent  { // implements OnInit

  firstname: string;
  lastname: string;
  users: Array<User> = [];
  selectedUser: User;

  constructor (private http: HttpClient) {

  }

  ngOnInit() {}

  search(): void {
    //Suchefunktion
    let url = 'http://localhost:8080/users/search/findByFirstnameAndLastname/';

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    let params = new HttpParams()
      .set('firstname', this.firstname)
      .set('lastname', this.lastname);

    this.http
      .get<User[]>(url, {headers,params})
      .subscribe(
        (users: User[]) => {

          this.users = users;
        },
        (errResp) => {
          console.error('error loading users', errResp);
        }
      )
  }

  select(u: User): void {
    this.selectedUser = u;
  }


}
