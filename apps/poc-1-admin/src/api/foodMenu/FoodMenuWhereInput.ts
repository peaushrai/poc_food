import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrdersListRelationFilter } from "../orders/OrdersListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type FoodMenuWhereInput = {
  category?: StringFilter;
  discount?: StringNullableFilter;
  foodDesc?: StringNullableFilter;
  foodImage?: StringNullableFilter;
  foodName?: StringFilter;
  id?: StringFilter;
  orders?: OrdersListRelationFilter;
  price?: FloatFilter;
};
