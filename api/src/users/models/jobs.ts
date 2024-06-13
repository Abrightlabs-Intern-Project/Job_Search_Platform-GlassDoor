import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Job {
    @Field()
    id: number;

    @Field()
    company_id: number;

    @Field()
    company_name: string;

    @Field()
    company_logo?: string;

    @Field()
    company_website_url?: string;

    @Field()
    company_linkedin_url?: string;

    @Field()
    job_title: string;

    @Field({nullable : true})
    location: string;

    @Field()
    type_name: string;

    @Field({nullable : true})
    city_name?: string;

    @Field()
    city_country_name?: string;

    @Field()
    has_remote?: boolean;

    @Field()
    published: Date;

    @Field()
    description: string;

    @Field()
    experience_level?: string;

    @Field()
    application_url: string;

    @Field()
    language: string;

    @Field()
    clearance_required: boolean;

    @Field()
    salary_min?: string;

    @Field()
    salary_max?: string;

    @Field()
    salary_currency?: string;

    
}