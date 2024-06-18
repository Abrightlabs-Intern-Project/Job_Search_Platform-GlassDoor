export interface Job {
    jobId: string;
    company_id: string;
    companyName: string;
    iconUrl?: string;
    jobTitle: string;
    location: string;
    jobType: string;
    hasRemote?: boolean;
    published: Date;
    description: string;
    applicationUrl: string;
    language: string;
    clearanceRequired: boolean;
    jobVacancies:number;
  }

export interface Users{
  userid :number;
    username:string;
    email:string;
}