import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '../model/user';
import { CreateUserInput } from './dto/input/createuser.input';
import { uuid } from 'uuidv4';
import { Userexist } from './dto/input/userexist.input';
import { Emailpass } from './dto/input/emailpass.input';



@Injectable()
export class UsersService {

    constructor(private prisma:PrismaService){}

    async createUser(createuserdata:CreateUserInput): Promise<User>{
        const newuser :User = {
            userId : uuid(),
            email: createuserdata.email,
            password:createuserdata.password,
            username:createuserdata.username,
            location:createuserdata.location,
            preferredJobPosition:createuserdata.preferedProfession,
            age:createuserdata.age,
            yearsOfExperience:createuserdata.yearsOfExperience
        }
  
        return  this.prisma.prismaClient.user.create({
            data :newuser
          });
    }

    async createingUser(email:string,username:string,password:string,age:number,yearsOfExperience:number,location:string,preferedProfession:string): Promise<User>{
        const newuser :User = {
            userId : uuid(),
            email: email,
            password:password,
            username:username,
            location:location,
            preferredJobPosition:preferedProfession,
            age:age,
            yearsOfExperience:yearsOfExperience
        }
  
        return  this.prisma.prismaClient.user.create({
            data :newuser
          });
    }

    async getallusers():Promise<User[]> {
        console.log('jobs');
        return this.prisma.prismaClient.user.findMany({})
    }
    async getallbookmarks(){
        console.log('bookmarks')
        return this.prisma.prismaClient.userData.findMany({})
    }

    async userExists(userexist:Userexist):Promise<User | null>{
        const user = this.prisma.prismaClient.user.findUnique({where:{
            email:userexist.email,
        }})
        return user
    }
    async deleteallusers(){
        return this.prisma.prismaClient.user.deleteMany({})
    }

    async checkMailPassword(emailpass :Emailpass ){
        const user = await this.prisma.prismaClient.user.findUnique({where:{email:emailpass.email}})
        if( await(user) === null){
            return false;
          }
console.log(await(user.email,user.password))
        if(await(user.password === emailpass.password)){
            return true;
        }
        return false;}
    
}
