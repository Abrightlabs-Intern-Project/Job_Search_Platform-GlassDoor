import { Controller, Get } from '@nestjs/common';
import { CommunityService } from './community.service';

@Controller('community')
export class CommunityController {
    constructor(private readonly communityservice:CommunityService){}


    @Get()
    getallcommunityPost(){
        return this.communityservice.getallcommunityPost();
    }

    // @Get()
    // dataadding(){
    //     return this.communityservice.addingdata();
    // }
    
}
