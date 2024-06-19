import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field()
    userId: string;

    @Field()
    email: string;

    @Field()
    username: string;

    @Field()
    password: string;

    @Field()
    age?: number;

    @Field()
    yearsOfExperience? : number;

    @Field()
    preferredJobPosition?: string;

    @Field()
    location?: string;

}