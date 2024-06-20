import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {

    constructor(private readonly jobsservice:JobsService){}

    @Get()
    getAllJobs() {
        return this.jobsservice.getAllJobs();
    }


}
