import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../entities/user";
import {Router} from "@angular/router";

@Component({
  selector: 'user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {
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

  delete():void {
    this.userService
      .deleteUser(this.user.id).subscribe(
      (user: User) => {
        console.log("Benutzer erstellt");
        this.router.navigate(['/user-search']);
      },
      (err) => {
        console.error('Loading Error', err);
      }
    );
  }
}
