import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetPreferredCompanyLocation } from './dto/args/companylocation.args';
// import { Company } from '@prisma/client';
import { GetPreferredCompany } from './dto/args/companyname.args';
import { Company } from 'src/model/company';
import { Job } from 'src/model/jobs';
import { companywithjobscombined } from './dto/args/createcompanywithjobs.args';
// import { Company } from 'src/model/company';

@Injectable()
export class CompanyService {

    constructor(private prisma:PrismaService){}

    async createNewCompany(newcompanydata:Company) {
        return this.prisma.prismaClient.company.create({data:newcompanydata})

    }

    async getAllCompany() {
        return this.prisma.prismaClient.company.findMany({
            include:{
                jobs:true
            }
            
        })
    }


    async getcompany(name: string) {
        const company = await this.prisma.prismaClient.company.findMany({
          where: {
            companyName: {
              contains: name,
              mode: 'insensitive'
            }
          }
        });
        return company[0];
      }

    async createnewjobpost(jobspost:Job){
        const comp = this.getcompany(jobspost.companyName)
            
            if( (await comp)){
                const id = await((await comp).companyId);
                console.log('if');        
                return this.prisma.prismaClient.job.create({data:{
            companyId:id,
            ...jobspost,
        }});
    }
    else{
        return this.prisma.prismaClient.job.create({data:{
            companyId:'626e3f73-7620-48f8-8276-6a08c20c175c',
            ...jobspost,
        }})
    }
}

    async createnewcompanyjobpost(newcompanyjobspost:companywithjobscombined){
        const newCompany = await this.prisma.prismaClient.company.create({
            data: {
                ...newcompanyjobspost.company
            }
        });

        const job = await this.prisma.prismaClient.job.create({
            data: {
              companyId: newCompany.companyId,
              ...newcompanyjobspost.job
            },
          });

          return newCompany
    } 

    

    async createcompany(){
        const fs = require('fs');
        const companyData = JSON.parse(fs.readFileSync('finaljobs22.json', 'utf8'));
        for (const company of companyData) {
            const comp = this.getcompany(company.companyName)
            
            if( (await comp)){
                // console.log(await(comp));
                // console.log(await(comp));
                const id = await((await comp).companyId);
                console.log('if');
                const job = await this.prisma.prismaClient.job.create({
                    data: {
                      companyId: id,
                      companyName: company.companyName,
                      iconUrl: company.iconUrl,
                      jobTitle: company.jobTitle,
                      location: company.location,
                      jobType: company.jobType,
                      hasRemote: company.hasRemote,
                      easyApply:company.easyApply,
                      published: company.published,
                      description: company.description,
                      applicationUrl: company.applicationUrl,
                      language: company.language,
                      clearanceRequired: company.clearanceRequired,
                      salaryCurrency: company.salaryCurrency,
                      jobVacancies: company.jobVacancies,
                    },
                  });
            }
            else{
                console.log('else');
                const newCompany = await this.prisma.prismaClient.company.create({
                    data: {
                        companyName: company.companyName,
                        companyWebsiteUrl:company.companyWebsiteUrl,
                        companyLinkedinUrl:company.companyLinkedinUrl,
                        rating:company.companyRating,
                        iconUrl:company.iconUrl,
                        location:company.companyLocation,
                        companySize:company.companySize,
                        industry:company.industry,
                        description:company.companyDescription
                    }
                });

                const job = await this.prisma.prismaClient.job.create({
                    data: {
                      companyId: newCompany.companyId,
                      companyName: company.companyName,
                      iconUrl: company.iconUrl,
                      jobTitle: company.jobTitle,
                      location: company.location,
                      jobType: company.jobType,
                      hasRemote: company.hasRemote,
                      easyApply:company.easyApply,
                      published: company.published,
                      description: company.description,
                      applicationUrl: company.applicationUrl,
                      language: company.language,
                      clearanceRequired: company.clearanceRequired,
                      salaryCurrency: company.salaryCurrency,
                      jobVacancies: company.jobVacancies,
                    },
                  });
            }

        }
        return "sucess"
    }

    async getCompanyByLocation(getpreferredcompanylocation:GetPreferredCompanyLocation):Promise<Company[]> {
        const companies :Company[] = await this.prisma.prismaClient.company.findMany({
            where:{
                location:{
                    contains:getpreferredcompanylocation.location,
                    mode: 'insensitive',
                }
                
            }
            ,include:{
                jobs:true
            }
        })

        return companies

    }

    async getCompanyByName(getpreferredcompany:GetPreferredCompany):Promise<Company[]> {
        const companies :Company[] = await this.prisma.prismaClient.company.findMany({
            where:{
                companyName:{
                    contains:getpreferredcompany.companyName,
                    mode: 'insensitive',
                }
            }
            ,include:{
                jobs:true
            }
        })

        return companies

    }




}
