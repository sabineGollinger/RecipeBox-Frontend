import {Component} from "@angular/core";
import {User} from "../../entities/user";
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {HttpParams} from "@angular/common/http";
import {UserService} from "../../service/user.service";

@Component ({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})

export class UserSearchComponent  { // implements OnInit

  firstname: string;
  lastname: string;
  users: Array<User> = [];

  constructor (private userService: UserService) {

  }

  ngOnInit() {}

  search(): void {
    this.userService
      .findByFirstnameAndLastname(this.firstname, this.lastname).subscribe(
        (users) => {
          this.users = users['_embedded']['users'];
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
    );
  }

  showAll(): void {
    this.userService
      .findAllUsers()
      .subscribe(
        (users) => {
          this.users = users['_embedded']['users'];
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
    );
  }
}
