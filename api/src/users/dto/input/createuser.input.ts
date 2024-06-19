import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

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

        @Field()
        @IsOptional()
        age:number;

        @Field()
        @IsOptional()
        preferedProfession : string;

        @Field()
        @IsOptional()
        location : string;

        @Field()
        @IsOptional()
        yearsOfExperience : number;




    }
