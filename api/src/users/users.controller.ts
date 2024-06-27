import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/input/createuser.input';
import { User } from '../model/user';
import { Userexist } from './dto/input/userexist.input';
import { Emailpass } from './dto/input/emailpass.input';
import { ApiTags } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Job } from 'src/model/jobs';
import { JobId } from './dto/input/jobid.input';


@Controller('users')
@ApiTags('users')

export class UsersController {

    constructor(private userservice: UsersService){}
    @Get()
    @ApiCreatedResponse({ type: [User] })
    findAll(){
        return this.userservice.getallusers();
    }

    // @Get('bookmark')
    // @ApiCreatedResponse({ type:  })
    // bookmark(){
    //     return this.userservice.getallbookmarks();
    // }
    @Post()
    @ApiCreatedResponse({ type: User })
    async createUser(@Body() createUser: CreateUserInput) {
      return this.userservice.createUser(createUser);
    }


    @Post('exists')
    @ApiOkResponse({ type: Boolean })
    async userExists(@Body() userexit: Userexist): Promise<boolean> {
      return this.userservice.userExists(userexit);
      
    }

    @Delete()
    @ApiOkResponse({type:Number})
    async deleteallusers(){
        return this.userservice.deleteallusers();
    }

    @Post('emailpassword')
    @ApiOkResponse({ type: Boolean })
    async checkMailPassword(@Body() emailpass:Emailpass){
    return this.userservice.checkMailPassword(emailpass);
  }

  @Post('addbookmark')
    @ApiOkResponse({ type: Boolean })
    async addbookmark(@Body() jobid:JobId){
    return this.userservice.addbookmark(jobid);
  }

  @Post('removebookmark')
    @ApiOkResponse({ type: Boolean })
    async removebookmark(@Body() jobid:JobId){
    return this.userservice.removeBookmark(jobid);
  }

  @Get('userjobsbookmark')
  @ApiOkResponse({ type: [Job] })
  async userjobsbookmark(){
    return this.userservice.bookmark();
  }

  @Get('bookmarkjobsid')
  @ApiOkResponse({ type: [String] })
  async bookmarkjobsid(){
    return this.userservice.bookmarkjobsid();
  }



  

}
