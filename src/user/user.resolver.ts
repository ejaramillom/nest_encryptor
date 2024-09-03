import { Resolver, Query, Mutation, Args, Subscription, Int } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { UserService } from './user.service';
import { User } from '../types/user.type';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
// import { CreateUserDto } from "./dto/create-user.dto";

const pubSub = new PubSub();

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  // @Query(() => User, { name: 'user' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.userService.findOne(id);
  // }

  @Query((returns) => User)
  async getUserById(@Args('id', { type: () => String }) id: string) {
    const exampleUser = new User();
    exampleUser.id = 1;
    exampleUser.firstname = 'Ava';
    exampleUser.lastname = 'Brown';
    exampleUser.email = 'ava@yopmail.com';
    exampleUser.password = 'Welcome123!';
    exampleUser.gender = 'UNKNOWN!';

    return exampleUser;
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }

  @Subscription(() => User)
  userCreated() {
   return pubSub.asyncIterator('userCreated');
  }
}
