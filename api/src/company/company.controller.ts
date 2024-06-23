import { Controller, Get, Post } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {


    constructor(private readonly companyservice:CompanyService){}


    // @Get()
    // initadd(){
    //     return this.companyservice.createcompany();
    // }
    @Get()
    getallcompany(){
        return this.companyservice.getAllCompany();
    }
}
