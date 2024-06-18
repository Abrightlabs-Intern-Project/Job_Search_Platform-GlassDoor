import { Args, Mutation, Resolver ,Query } from '@nestjs/graphql';
import { User } from '../model/user';
import { CreateUserInput } from './dto/input/createuser.input';
import { UsersService } from './users.service';
import { Job } from '../model/jobs';
import { GetPreferredLocation } from '../jobs/dto/args/joblocation.args';
import { GetPreferredJob } from '../jobs/dto/args/jobtitle.input';

@Resolver()
export class UsersResolver {

    constructor(private readonly userservice:UsersService){}

    // @Mutation(() => User)
    // createUser(@Args('createUserData') createUserData:CreateUserInput): Promise<User>{
    //     return this.userservice.createUser(createUserData)
    // }

    // @Query(() => [User])
    // getAllUsers() : Promise<User[]>{
    //     return this.userservice.getAllUsers();
    // }

    // @Query(() => [Job])
    // getAllJobs() {
    //     return this.userservice.getAllJobs();
    // }

    // @Query(() => [Job])
    // getJobByLocation(@Args('getpreferredlocation') getpreferredlocation:GetPreferredLocation): Promise<Job[]>{
    //     return this.userservice.jobSearchByLocation(getpreferredlocation)
    // }

    // @Query(() => [Job])
    // jobSearchByTitle(@Args('getpreferredjob') getpreferredjob:GetPreferredJob): Promise<Job[]>{
    //     return this.userservice.jobSearchByTitle(getpreferredjob)
    // }

    // @Query(() => [User])
    // updatingdb():Promise<User[]>{
    //     return this.userservice.updatingdb();
    // }


}
