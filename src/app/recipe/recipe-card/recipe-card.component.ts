import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Recipe} from "../../entities/recipe";
import {User} from "../../entities/user";
import {AuthService} from "../../shared/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html'
})
export class RecipeCardComponent { // } implements OnInit {
  loginUser: User;
  loginUserRole: String;
  constructor(private authService: AuthService) { }
  @Input() item: Recipe;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  ngOnInit() {
    this.loginUser = this.authService.loginUser;
    this.loginUserRole = this.authService.loginUserRole;
  }

}
