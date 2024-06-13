import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
    export class GetPreferredLocation{
        @Field()
        @IsNotEmpty()
        location :string;


    }
