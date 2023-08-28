import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { OrdersTitle } from "../orders/OrdersTitle";

export const FoodMenuEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <TextInput label="discount" source="discount" />
        <TextInput label="foodDesc" multiline source="foodDesc" />
        <TextInput label="foodImage" multiline source="foodImage" />
        <TextInput label="foodName" source="foodName" />
        <ReferenceArrayInput
          source="orders"
          reference="Orders"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrdersTitle} />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
