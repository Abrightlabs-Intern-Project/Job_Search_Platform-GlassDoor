import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetPreferredCompanyLocation } from './dto/args/companylocation.args';
import { Company } from '@prisma/client';
import { GetPreferredCompany } from './dto/args/companyname.args';
// import { Company } from 'src/model/company';

@Injectable()
export class CompanyService {

    constructor(private prisma:PrismaService){}


    async getAllCompany() {
        return this.prisma.prismaClient.company.findMany({})
    }


    async getcompany(name:string){

        const company = await this.prisma.prismaClient.company.findMany({
            where: {
      companyName: name,
    }
  });
  return company[0]
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



    async getallCompanies(){
        const company = await this.prisma.prismaClient.company.create({
            data: {
              companyName: "Tech Innovators Inc.",
              companyWebsiteUrl: "https://techinnovators.com",
              companyLinkedinUrl: "https://linkedin.com/company/tech-innovators",
              rating: 4.5,
              iconUrl: "https://techinnovators.com/icon.png",
              location: "New York, NY",
              companySize: 500,
              industry: "Technology",
              description: "A leading company in tech innovations.",
            },
          });
          const job = await this.prisma.prismaClient.job.create({
            data: {
              companyId: company.companyId,
              companyName: company.companyName,
              iconUrl: company.iconUrl,
              jobTitle: "Senior Software Engineer",
              location: "New York, NY",
              jobType: "Full-time",
              hasRemote: true,
              published: new Date(),
              description: "We are looking for a Senior Software Engineer to join our team.",
              applicationUrl: "https://techinnovators.com/careers/123",
              language: "English",
              clearanceRequired: false,
              salaryCurrency: "USD",
              jobVacancies: 3,
            },
          });
    }





    

    async updatecompanydata(){
        const fs = require('fs');
        const companyData = JSON.parse(fs.readFileSync('finalcompany.json', 'utf8'));
        console.log("upadting")
        for (const company of companyData) {
            console.log("inside loop")
            await this.prisma.prismaClient.company.create({
                data:{
 
                    companyName :company.companyName,
                    companyWebsiteUrl:company.companyWebsiteUrl,
                    companyLinkedinUrl :company.companyLinkedinUrl,
                    rating :company.rating,
                    iconUrl:company.iconUrl,
                    location  :company.location,
                    companySize  :company.companySize,
                    industry            :company.industry,
                    description           :company.description,

                }
            });
            console.log('Data added successfully');
        }
        return this.prisma.prismaClient.company.findMany({})
    
    }



















































































































































































    async getCompanyByLocation(getpreferredcompanylocation:GetPreferredCompanyLocation):Promise<Company[]> {
        const companies :Company[] = await this.prisma.prismaClient.company.findMany({
            where:{
                location:{
                    contains:getpreferredcompanylocation.location,
                    mode: 'insensitive',
                }
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
        })

        return companies

    }




}
