import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
    export class CreateUserInput{
        @Field()
        @IsNotEmpty()
        @IsEmail()
        email: string;

        @Field()
        @IsNotEmpty()
        @IsString()
        username: string;

        @Field()
        @IsNotEmpty()
        @IsString()
        password: string;


    }
