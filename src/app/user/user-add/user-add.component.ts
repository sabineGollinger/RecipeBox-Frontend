import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../entities/user";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  userForm: FormGroup;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {

  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      firstname:  ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      lastname:  ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password:  ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  create(): void {
    this.userService
      .createUser(this.userForm.value).subscribe(
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
