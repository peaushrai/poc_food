/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FoodMenuWhereUniqueInput } from "../../foodMenu/base/FoodMenuWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FoodMenuUpdateManyWithoutOrdersItemsInput {
  @Field(() => [FoodMenuWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FoodMenuWhereUniqueInput],
  })
  connect?: Array<FoodMenuWhereUniqueInput>;

  @Field(() => [FoodMenuWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FoodMenuWhereUniqueInput],
  })
  disconnect?: Array<FoodMenuWhereUniqueInput>;

  @Field(() => [FoodMenuWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FoodMenuWhereUniqueInput],
  })
  set?: Array<FoodMenuWhereUniqueInput>;
}

export { FoodMenuUpdateManyWithoutOrdersItemsInput as FoodMenuUpdateManyWithoutOrdersItemsInput };