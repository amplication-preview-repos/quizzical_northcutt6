/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EmailWhereUniqueInput } from "../../email/base/EmailWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EmailUpdateManyWithoutUsersInput {
  @Field(() => [EmailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmailWhereUniqueInput],
  })
  connect?: Array<EmailWhereUniqueInput>;

  @Field(() => [EmailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmailWhereUniqueInput],
  })
  disconnect?: Array<EmailWhereUniqueInput>;

  @Field(() => [EmailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EmailWhereUniqueInput],
  })
  set?: Array<EmailWhereUniqueInput>;
}

export { EmailUpdateManyWithoutUsersInput as EmailUpdateManyWithoutUsersInput };
