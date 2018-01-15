import {User} from "./user";

export interface Recipe {
  id: number;
  name: string;
  category: string;
  ingredient: string;
  preparation: string;
  hint: string;
  user: User;


}
