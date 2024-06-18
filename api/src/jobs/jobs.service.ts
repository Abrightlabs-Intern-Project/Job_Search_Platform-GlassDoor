import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetPreferredLocation } from './dto/args/joblocation.args';
import { GetPreferredJob } from './dto/args/jobtitle.input';
import { Job } from '@prisma/client';
import { uuid } from 'uuidv4';

@Injectable()
export class JobsService {

    constructor(private prisma:PrismaService){}


    async getAllJobs(){
        return this.prisma.prismaClient.job.findMany({})
    }

    async jobSearchByLocation(getpreferredlocation:GetPreferredLocation):Promise<Job[]> {
        const jobs :Job[] = await this.prisma.prismaClient.job.findMany({
            where:{
                location:{
                    contains:getpreferredlocation.location,
                    mode: 'insensitive',
                }
            }
        })

        return jobs

    }


    async jobSearchByTitle(getpreferredjob:GetPreferredJob):Promise<Job[]> {
        const jobs :Job[] = await this.prisma.prismaClient.job.findMany({
            where:{
                jobTitle:{
                    contains:getpreferredjob.jobTitle,
                    mode: 'insensitive',
                }
            }
        })

        return jobs

    }


    async updatejobsdata(){
        const fs = require('fs');
        const jobData = JSON.parse(fs.readFileSync('finaljobs.json', 'utf8'));
        console.log("upadting")
        for (const jo of jobData) {
            console.log("inside loop")
        //    const  names :string  = jo.companyName
        //     const company = this.prisma.prismaClient.company.create({
        //         data:{
        //             companyName :"amazon",
        //             companyWebsiteUrl:'amazon.in',
        //             companyLinkedinUrl :'amazon.in',
        //             rating :3.4,
        //             iconUrl:'amazon.in',
        //             location  :'bangalore',
        //             companySize  :500,
        //             industry            :'software devloper',
        //             description           :'the amazon is great company',
        //         }
        //       });
        //       console.log((await company).companyId)
            // const jo = JSON.parse(jobs)
            await this.prisma.prismaClient.job.create({
                data:{
 
                    companyId:uuid(),
                    companyName :jo.companyName,
                    iconUrl :jo.iconUrl,
                    jobTitle :jo.jobTitle,
                    location  :jo.location,
                    jobType  :jo.jobType,
                    hasRemote            :jo.hasRemote,
                    published             :jo.published,
                    description           :jo.description,
                    applicationUrl       :jo.applicationUrl,
                    language              :jo.language,
                    clearanceRequired    :jo.clearanceRequired,
                    salaryCurrency       :jo.salaryCurrency,
                    jobVacancies :jo.jobVacancies,

                    }


                }
            );
            console.log('Data added successfully');
        }
        return this.prisma.prismaClient.job.findMany({})
    
    }




}
