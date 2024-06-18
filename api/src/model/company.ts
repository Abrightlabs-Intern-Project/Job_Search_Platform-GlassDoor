import { Field, Float, ObjectType } from "@nestjs/graphql";
import { Transform } from "stream";

@ObjectType()
export class Company {
    @Field()
    companyId: string;

    @Field()
    companyName: string;

    @Field({nullable : true})
    companyWebsiteUrl?: string;

    @Field({nullable : true})
    companyLinkedinUrl?: string;

    @Field(type => Float)
    rating?: number;

    @Field({nullable : true})
    iconUrl?: string;

    @Field()
    location: string;

    @Field()
    companySize: number;

    @Field()
    industry: string;

    @Field()
    description?: string;
    
}