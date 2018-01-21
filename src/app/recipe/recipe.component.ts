import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService} from "../shared/auth/auth.service";
import {Router} from "@angular/router";
import {User} from "../entities/user";

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeComponent implements OnInit {

  loginUser: User;
  constructor(private authService: AuthService,
              private router: Router) {
    }

  ngOnInit() {
    this.loginUser = this.authService.loginUser;
  }
}
