import {Component, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../entities/user";
import {Router} from "@angular/router";

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserEditComponent {
  id: string;
  user: User;
  errors: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router) {

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

  save(): void {
    this.userService
      .updateUser(this.user).subscribe(
        (user) => {
          console.log("Benutzer bearbeitet");
          this.router.navigate(['/user-search']);
        },
        (err) => {
          console.error('Loading Error', err);
        }

    );

    console.log(this.user);
  }
}
