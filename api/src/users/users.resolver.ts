import { Args, Mutation, Resolver ,Query } from '@nestjs/graphql';
import { User } from './models/user';
import { CreateUserInput } from './dto/input/createuser.input';
import { UsersService } from './users.service';

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

    // @Query(() => String)
    // updatedb(){
    //     return this.userservice.updatedb();
    // }


}
