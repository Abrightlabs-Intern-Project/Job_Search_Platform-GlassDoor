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


    async updatecompanydata(){
        const fs = require('fs');
        const companyData = JSON.parse(fs.readFileSync('finalcompany.json', 'utf8'));
        console.log("upadting")
        for (const company of companyData) {
            console.log("inside loop")
            // const jo = JSON.parse(jobs)
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





}
