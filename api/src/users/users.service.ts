import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './models/user';
import { CreateUserInput } from './dto/input/createuser.input';
import { uuid } from 'uuidv4';



@Injectable()
export class UsersService {

    constructor(private prisma:PrismaService){}

    async createUser(createuserdata:CreateUserInput): Promise<User>{
        const newuser :User = {
            userid : uuid(),
            email: createuserdata.email,
            password:createuserdata.password,
            username:createuserdata.username
        }
  
        this.prisma.prismaClient.user.create({
            data:{
                userid : uuid(),
            email: createuserdata.email,
            password:createuserdata.password,
            username:createuserdata.username
            }
          });
          console.log("created new user successfully");

        return newuser;
    }

    async getAllUsers() {
        return this.prisma.prismaClient.user.findMany({})
    }

}
