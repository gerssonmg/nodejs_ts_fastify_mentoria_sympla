import { User } from '@prisma/client';
import { IUsersRepository } from './user-repository.interface';
import { prisma } from '../lib/prisma';

export class PrismaUsersRepository implements IUsersRepository {
  async findAll(): Promise<User[]> {
    return prisma.user.findMany();
  }
}
