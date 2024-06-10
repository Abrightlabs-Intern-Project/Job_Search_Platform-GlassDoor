import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field()
    userid: string;

    @Field()
    email: string;

    @Field()
    username: string;

    @Field()
    password: string;
}