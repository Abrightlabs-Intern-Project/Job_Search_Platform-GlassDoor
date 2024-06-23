export interface Job {
    jobId: string;
    company_id: string;
    companyName: string;
    iconUrl?: string;
    jobTitle: string;
    location: string;
    jobType: string;
    hasRemote?: boolean;
    easyApply:boolean;
    published: Date;
    description: string;
    applicationUrl: string;
    language: string;
    clearanceRequired: boolean;
    jobVacancies:number;
    company:Company;
  }

  export interface Company{
    companyId:string;
  companyName:         string;
  companyWebsiteUrl?:   string ;
  companyLinkedinUrl?: string ;
  rating:              number;
  iconUrl? :            string ;
  location :           string  ;
  companySize :        number    ;
  industry :           string ;
  description :        string  ;
  }
export interface Users{
  userid :number;
    username:string;
    email:string;
}