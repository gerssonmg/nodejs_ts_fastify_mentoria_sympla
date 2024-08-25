import { User } from '@prisma/client';

export interface IUsersRepository {
  findAll(): Promise<User[]>;
}
