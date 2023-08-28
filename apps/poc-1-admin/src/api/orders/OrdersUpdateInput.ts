import { FoodMenuUpdateManyWithoutOrdersItemsInput } from "./FoodMenuUpdateManyWithoutOrdersItemsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrdersUpdateInput = {
  foodMenus?: FoodMenuUpdateManyWithoutOrdersItemsInput;
  users?: UserWhereUniqueInput;
};
