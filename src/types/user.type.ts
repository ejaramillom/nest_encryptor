import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType({ description: 'users' })
export class User {
	@Field((type) => ID)
	id: number;

	@Field()
	firstname: string;

	@Field()
	lastname: string;

	@Field()
	email: string;

	@Field()
	password: string;

	@Field()
	gender: string;
}