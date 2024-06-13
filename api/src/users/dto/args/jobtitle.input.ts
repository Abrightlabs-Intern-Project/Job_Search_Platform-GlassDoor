import { Field, InputType } from "@nestjs/graphql";
import {  IsNotEmpty } from "class-validator";

@InputType()
    export class GetPreferredJob{
        @Field()
        @IsNotEmpty()
        job_title :string;


    }
