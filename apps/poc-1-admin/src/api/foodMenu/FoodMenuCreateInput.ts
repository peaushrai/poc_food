import { OrdersCreateNestedManyWithoutFoodMenusInput } from "./OrdersCreateNestedManyWithoutFoodMenusInput";

export type FoodMenuCreateInput = {
  category: string;
  discount?: string | null;
  foodDesc?: string | null;
  foodImage?: string | null;
  foodName: string;
  orders?: OrdersCreateNestedManyWithoutFoodMenusInput;
  price: number;
};
