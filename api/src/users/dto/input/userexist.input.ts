import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@InputType()
    export class Userexist{
        @Field()
        @IsNotEmpty()
        @IsEmail()
        email: string;


    }
