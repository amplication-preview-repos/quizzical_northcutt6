/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RecurringInvoiceWhereInput } from "./RecurringInvoiceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RecurringInvoiceOrderByInput } from "./RecurringInvoiceOrderByInput";

@ArgsType()
class RecurringInvoiceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RecurringInvoiceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RecurringInvoiceWhereInput, { nullable: true })
  @Type(() => RecurringInvoiceWhereInput)
  where?: RecurringInvoiceWhereInput;

  @ApiProperty({
    required: false,
    type: [RecurringInvoiceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RecurringInvoiceOrderByInput], { nullable: true })
  @Type(() => RecurringInvoiceOrderByInput)
  orderBy?: Array<RecurringInvoiceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RecurringInvoiceFindManyArgs as RecurringInvoiceFindManyArgs };
