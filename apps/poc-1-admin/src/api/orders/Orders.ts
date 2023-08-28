import { FoodMenu } from "../foodMenu/FoodMenu";
import { User } from "../user/User";

export type Orders = {
  createdAt: Date;
  foodMenus?: Array<FoodMenu>;
  id: string;
  updatedAt: Date;
  users?: User;
};
