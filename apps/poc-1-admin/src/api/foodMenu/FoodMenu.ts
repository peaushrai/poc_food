import { Orders } from "../orders/Orders";

export type FoodMenu = {
  category: string;
  createdAt: Date;
  discount: string | null;
  foodDesc: string | null;
  foodImage: string | null;
  foodName: string;
  id: string;
  orders?: Array<Orders>;
  price: number;
  updatedAt: Date;
};
