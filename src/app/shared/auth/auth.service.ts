import {Injectable} from "@angular/core";
import {User} from "../../entities/user";

@Injectable()
export class AuthService {
      loginUserId: number;
      loginUser: User;
      loginUserRole: string;

	    constructor() { }

	    login(user: User) {
          this.loginUser = user;
	        this.loginUserId = user.id;
          switch (user.email) {
            case 'admin@recipes.at':
              this.loginUserRole = 'A';
              break;
            default:
              this.loginUserRole = 'U';
          }
	    }

	    logout() {
	        this.loginUserId = null;
          this.loginUser = null;
          this.loginUserRole = null;
	    }

}
