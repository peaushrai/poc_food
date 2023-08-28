import { OrdersUpdateManyWithoutFoodMenusInput } from "./OrdersUpdateManyWithoutFoodMenusInput";

export type FoodMenuUpdateInput = {
  category?: string;
  discount?: string | null;
  foodDesc?: string | null;
  foodImage?: string | null;
  foodName?: string;
  orders?: OrdersUpdateManyWithoutFoodMenusInput;
  price?: number;
};
