import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '../model/user';
import { CreateUserInput } from './dto/input/createuser.input';
import { uuid } from 'uuidv4';
import { GetPreferredLocation } from '../jobs/dto/args/joblocation.args';
import { promises } from 'dns';
import { Job } from '@prisma/client';
import { GetPreferredJob } from '../jobs/dto/args/jobtitle.input';



@Injectable()
export class UsersService {

    constructor(private prisma:PrismaService){}

    // async createUser(createuserdata:CreateUserInput): Promise<User>{
    //     const newuser :User = {
    //         userid : uuid(),
    //         email: createuserdata.email,
    //         password:createuserdata.password,
    //         username:createuserdata.username
    //     }
  
    //     return  this.prisma.prismaClient.user.create({
    //         data :newuser
    //       });
    //       console.log("created new user successfully");

    //     return newuser;
    // }

    // async getAllUsers() {
    //     return this.prisma.prismaClient.user.findMany({})
    // }

    // async getAllJobs(){
    //     return this.prisma.prismaClient.job.findMany({})
    // }

    // async jobSearchByLocation(getpreferredlocation:GetPreferredLocation):Promise<Job[]> {
    //     const jobs :Job[] = await this.prisma.prismaClient.job.findMany({
    //         where:{
    //             location:{
    //                 contains:getpreferredlocation.location,
    //                 mode: 'insensitive',
    //             }
    //         }
    //     })

    //     return jobs

    // }


    // async jobSearchByTitle(getpreferredjob:GetPreferredJob):Promise<Job[]> {
    //     const jobs :Job[] = await this.prisma.prismaClient.job.findMany({
    //         where:{
    //             jobTitle:{
    //                 contains:getpreferredjob.jobTitle,
    //                 mode: 'insensitive',
    //             }
    //         }
    //     })

    //     return jobs

    // }


    // async updatingdb(){
    //     const fs = require('fs');
    //     const jobData = JSON.parse(fs.readFileSync('depulicate_remove.json', 'utf8'));
    //     console.log("upadting")
    //     for (const jo of jobData) {
    //         console.log("inside loop")
    //         // const jo = JSON.parse(jobs)
    //         await this.prisma.prismaClient.job.create({
    //             data:{
 
    //                 id:jo.id,
    //                 company_id:jo.company_id,
    //                 company_name :jo.company_name,
    //                 company_logo :jo.company_logo,
    //                 company_website_url:jo.company_website_url,
    //                 company_linkedin_url :jo.company_linkedin_url,
    //                 job_title :jo.job_title,
    //                 location  :jo.location,
    //                 type_name  :jo.type_name,
    //                 city_name :jo.city_name,
    //                 city_country_name :jo.city_country_name,
    //                 has_remote            :jo.has_remote,
    //                 published             :jo.published,
    //                 description           :jo.description,
    //                 experience_level      :jo.experience_level,
    //                 application_url       :jo.application_url,
    //                 language              :jo.language,
    //                 clearance_required    :jo.clearance_required,
    //                 salary_min            :jo.salary_min,
    //                 salary_max            :jo.salary_max,
    //                 salary_currency       :jo.salary_currency

    //             }
    //         });
    //         console.log('Data added successfully');
    //     }
    //     return this.prisma.prismaClient.user.findMany({})
    
    // }


    // async updatingcompanydata(){
    //     const fs = require('fs');
    //     const jobData = JSON.parse(fs.readFileSync('finalcompany.json', 'utf8'));
    //     console.log("upadting")
    //     for (const jo of jobData) {
    //         console.log("inside loop")
    //         // const jo = JSON.parse(jobs)
    //         await this.prisma.prismaClient.company.create({
    //             data:{
 
    //                 id:jo.id,
    //                 company_id:jo.company_id,
    //                 company_name :jo.company_name,
    //                 company_logo :jo.company_logo,
    //                 company_website_url:jo.company_website_url,
    //                 company_linkedin_url :jo.company_linkedin_url,
    //                 job_title :jo.job_title,
    //                 location  :jo.location,
    //                 type_name  :jo.type_name,
    //                 city_name :jo.city_name,
    //                 city_country_name :jo.city_country_name,
    //                 has_remote            :jo.has_remote,
    //                 published             :jo.published,
    //                 description           :jo.description,
    //                 experience_level      :jo.experience_level,
    //                 application_url       :jo.application_url,
    //                 language              :jo.language,
    //                 clearance_required    :jo.clearance_required,
    //                 salary_min            :jo.salary_min,
    //                 salary_max            :jo.salary_max,
    //                 salary_currency       :jo.salary_currency

    //             }
    //         });
    //         console.log('Data added successfully');
    //     }
    //     return this.prisma.prismaClient.user.findMany({})
    
    // }

}
