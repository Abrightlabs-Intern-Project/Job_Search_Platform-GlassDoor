import { gql } from '@apollo/client';

export const getAllUsers = gql`
query {
  getAllUsers{
    userid
    username
    email
  }
}
`;
export const getAllJobs = gql`

query{
  getAllJobs{
    id                    
  company_id            
  company_name          
  company_logo          
  company_website_url   
  company_linkedin_url  
  job_title             
  location              
  type_name             
  city_name             
  city_country_name     
  has_remote            
  published             
  description                 
  application_url      
  language              
  clearance_required    
      
  }
}`
