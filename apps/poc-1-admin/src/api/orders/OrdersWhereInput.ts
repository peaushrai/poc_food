import { FoodMenuListRelationFilter } from "../foodMenu/FoodMenuListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrdersWhereInput = {
  foodMenus?: FoodMenuListRelationFilter;
  id?: StringFilter;
  users?: UserWhereUniqueInput;
};
