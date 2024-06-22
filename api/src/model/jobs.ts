import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Job {
    @Field()
    jobId: string;

    @Field()
    companyId: string;

    @Field()
    companyName: string;

    @Field()
    iconUrl?: string;

    @Field()
    jobTitle: string;

    @Field({nullable : true})
    location: string;

    @Field()
    jobType: string;

    @Field()
    hasRemote?: boolean;

    @Field()
    easyApply?: boolean;

    @Field()
    published: Date;

    @Field()
    description: string;

    @Field()
    applicationUrl: string;

    @Field()
    language: string;

    @Field()
    clearanceRequired: boolean;

    @Field()
    salaryCurrency?: string;

    
    @Field()
    jobVacancies:number;
    
}