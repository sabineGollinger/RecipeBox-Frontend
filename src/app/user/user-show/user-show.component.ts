import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../entities/user";
import {AuthService} from "../../shared/auth/auth.service";


@Component({
  selector: 'user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent {
  id: string;
  user: User;
  errors: string;
  loginUser: User;
  loginUserRole: String;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private userService: UserService) {

  }

  ngOnInit() {
    this.loginUser = this.authService.loginUser;
    this.loginUserRole = this.authService.loginUserRole;

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
