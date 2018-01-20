import {Component} from "@angular/core";
import {AuthService} from "../shared/auth/auth.service";
import {FormGroup, Validators, FormBuilder, FormControl} from "@angular/forms";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  loginForm: FormGroup;
  error: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.error = false;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.userService
      .findByUsernameAndPassword(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      (user) => {
        this.error = false;
        console.log(user);
        this.authService.login(user);
        this.router.navigate(['/home']);
      },
      (err) => {
        this.error = true;
      }
    );
    //
  }

}
