import { User } from '@prisma/client';

export interface IUsersRepository {
  getUsers(): Promise<User[]>;
  getUser(id: string): Promise<User[]>;
  createUser(): Promise<User[]>;
  updateUser(): Promise<User[]>;
  deleteUser(): Promise<User[]>;
}
