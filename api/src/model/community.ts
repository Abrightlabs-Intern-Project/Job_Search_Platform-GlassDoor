import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@ObjectType()
export class Community {
    @Field()
    id:number;
    
    @Field()
    bowl_name: string;

    @Field()
    info: string;

    @Field()
    icon: string;

    @Field()
    @IsOptional()
    description?: string;

    @Field()
    @IsOptional()
    image?:string;

    @Field()
    time: string;
}