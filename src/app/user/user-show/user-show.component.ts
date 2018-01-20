import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../entities/user";

@Component({
  selector: 'user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent {
  id: string;
  user: User;
  errors: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.userService
          .findById(this.id).subscribe(
          (users) => {
            this.user = users;
            console.log(this.user);
          },
          (err) => {
            console.error('Fehler beim Laden', err);
          }
        );
      }
    );
  }
}
