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
    jobId
    companyId
    companyName
    iconUrl
    jobTitle
    location
    jobType
    hasRemote
    published
    description
    applicationUrl
    language
    clearanceRequired
    jobVacancies
    
  }
}
  `
