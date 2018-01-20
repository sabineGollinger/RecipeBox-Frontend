import {Component} from "@angular/core";
import {AuthService} from "../shared/auth/auth.service";
import {User} from "../entities/user";
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  loginUser: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loginUser = this.authService.loginUser;
    console.log("test");
    console.log(this.authService.loginUserRole);
  }

  logout() {
    this.authService.logout();
    this.loginUser = this.authService.loginUser;
  }

}
