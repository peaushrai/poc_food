import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FoodMenuList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"foodMenus"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="discount" source="discount" />
        <TextField label="foodDesc" source="foodDesc" />
        <TextField label="foodImage" source="foodImage" />
        <TextField label="foodName" source="foodName" />
        <TextField label="ID" source="id" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
