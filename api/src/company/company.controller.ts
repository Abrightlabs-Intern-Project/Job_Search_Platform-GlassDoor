import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { ApiTags } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Company } from 'src/model/company';
import { GetPreferredCompanyLocation } from './dto/args/companylocation.args';
import { GetPreferredCompany } from './dto/args/companyname.args';
import { Job } from 'src/model/jobs';
import { companywithjobscombined } from './dto/args/createcompanywithjobs.args';

@Controller('company')
@ApiTags('company')

export class CompanyController {


    constructor(private readonly companyservice:CompanyService){}


    // @Get()
    // initadd(){
    //     return this.companyservice.createcompany();
    // }
    @Get()
    @ApiOkResponse({ type: [Company] })
    getallcompany(){
        return this.companyservice.getAllCompany();
    }

    @Post('companyByLocation')
    @ApiCreatedResponse({ type: [Company] })
    getCompanyByLocation(@Body() getpreferredcompanylocation:GetPreferredCompanyLocation): Promise<Company[]>{
        return this.companyservice.getCompanyByLocation(getpreferredcompanylocation)
    }

    @Post('createNewCompany')
    @ApiCreatedResponse({ type: Company })
    createNewCompany(@Body() newcompanydata:Company): Promise<Company>{
        return this.companyservice.createNewCompany(newcompanydata)
    }

    @Post('createNewjobpost')
    @ApiCreatedResponse({ type: Job })
    createnewjobpost(@Body() newjobspost:Job): Promise<Job>{
        return this.companyservice.createnewjobpost(newjobspost)
    }
    @Post('companywithjobs')
    @ApiCreatedResponse({ type: Company })
    createnewcompanyjobpost(@Body() newcompanyjobspost:companywithjobscombined): Promise<Company>{
        return this.companyservice.createnewcompanyjobpost(newcompanyjobspost)
    }
    

    @Post('companyByName')
    @ApiCreatedResponse({ type: [Company] })
    getCompanyByName(@Body() getpreferredcompany:GetPreferredCompany): Promise<Company[]>{
        return this.companyservice.getCompanyByName(getpreferredcompany)
    }



}
