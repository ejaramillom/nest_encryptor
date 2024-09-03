import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
}
