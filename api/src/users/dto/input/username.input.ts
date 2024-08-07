import { Field, InputType } from "@nestjs/graphql";
import {  IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

@InputType()
    export class UserName{
        @Field()
        @IsNotEmpty()
        @ApiProperty()
        username: string;


    }
