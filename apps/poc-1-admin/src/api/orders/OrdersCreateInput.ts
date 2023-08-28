import { FoodMenuCreateNestedManyWithoutOrdersItemsInput } from "./FoodMenuCreateNestedManyWithoutOrdersItemsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrdersCreateInput = {
  foodMenus?: FoodMenuCreateNestedManyWithoutOrdersItemsInput;
  users: UserWhereUniqueInput;
};
