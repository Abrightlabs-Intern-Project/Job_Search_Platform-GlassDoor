import { Args, Mutation, Resolver ,Query } from '@nestjs/graphql';
import { User } from './models/user';
import { CreateUserInput } from './dto/input/createuser.input';
import { UsersService } from './users.service';
import { Job } from './models/jobs';
import { GetPreferredLocation } from './dto/args/joblocation.args';
import { GetPreferredJob } from './dto/args/jobtitle.input';

@Resolver()
export class UsersResolver {

    constructor(private readonly userservice:UsersService){}

    @Mutation(() => User)
    createUser(@Args('createUserData') createUserData:CreateUserInput): Promise<User>{
        return this.userservice.createUser(createUserData)
    }

    @Query(() => [User])
    getAllUsers() : Promise<User[]>{
        return this.userservice.getAllUsers();
    }

    @Query(() => [Job])
    getAllJobs() {
        return this.userservice.getAllJobs();
    }

    @Query(() => [Job])
    getJobByLocation(@Args('getpreferredlocation') getpreferredlocation:GetPreferredLocation): Promise<Job[]>{
        return this.userservice.jobSearchByLocation(getpreferredlocation)
    }

    @Query(() => [Job])
    jobSearchByTitle(@Args('getpreferredjob') getpreferredjob:GetPreferredJob): Promise<Job[]>{
        return this.userservice.jobSearchByTitle(getpreferredjob)
    }

    @Query(() => [User])
    updatingdb():Promise<User[]>{
        return this.userservice.updatingdb();
    }


}
