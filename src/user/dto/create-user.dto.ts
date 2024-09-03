import { Min } from '@nestjs/class-validator'
import { CreateUserInput } from "./create-user.input";

export class CreateUserDto extends CreateUserInput {
    @Min(1)
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender: string;
}