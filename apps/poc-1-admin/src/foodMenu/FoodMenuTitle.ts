import { FoodMenu as TFoodMenu } from "../api/foodMenu/FoodMenu";

export const FOODMENU_TITLE_FIELD = "foodName";

export const FoodMenuTitle = (record: TFoodMenu): string => {
  return record.foodName || String(record.id);
};
