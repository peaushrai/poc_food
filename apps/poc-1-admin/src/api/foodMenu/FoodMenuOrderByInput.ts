import { SortOrder } from "../../util/SortOrder";

export type FoodMenuOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  discount?: SortOrder;
  foodDesc?: SortOrder;
  foodImage?: SortOrder;
  foodName?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
