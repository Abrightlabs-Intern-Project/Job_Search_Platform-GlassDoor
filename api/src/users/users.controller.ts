import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/input/createuser.input';
import { User } from '../model/user';import { Userexist } from './dto/input/userexist.input';
import { Emailpass } from './dto/input/emailpass.input';

@Controller('users')
export class UsersController {

    constructor(private userservice: UsersService){}
    @Get()
    findAll(){
        return this.userservice.getallusers();
    }

    @Get('bookmark')
    bookmark(){
        return this.userservice.getallbookmarks();
    }
    @Post()
    async createUser(@Body() createUser: CreateUserInput) {
        console.log('creating')
      return this.userservice.createUser(createUser);
    }


    @Post('exists')
    async userExists(@Body() userexit: Userexist): Promise<boolean> {
    //   console.log("requesting");
    
      const user = this.userservice.userExists(userexit);
      if( await(user) === null){
        return false;
      }
      return true;
    }

    @Get('delusers')
    async deleteallusers(){
        return this.userservice.deleteallusers();
    }

    @Post('emailpass')
    async checkMailPassword(@Body() emailpass:Emailpass){
    return this.userservice.checkMailPassword(emailpass);
}
}
