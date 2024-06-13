export interface Job {
    id: number;
    company_id: number;
    company_name: string;
    company_logo?: string;
    company_website_url?: string;
    company_linkedin_url?: string;
    job_title: string;
    location: string;
    type_name: string;
    city_name?: string;
    city_country_name?: string;
    has_remote?: boolean;
    published: Date;
    description: string;
    // experience_level?: string;
    application_url: string;
    language: string;
    clearance_required: boolean;
    // salary_min?: number;
    // salary_max?: number;
    // salary_currency?: string;
  }

export interface Users{
  userid :number;
    username:string;
    email:string;
}