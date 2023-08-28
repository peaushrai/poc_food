import { Orders } from "../orders/Orders";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Orders>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
