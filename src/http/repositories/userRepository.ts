import { User } from '@prisma/client';
import { prisma } from '../lib/prisma';

export class PrismaUsersRepository{
  async getUsers(): Promise<User[]> {
    return prisma.user.findMany();
  }

  async getUser(id: string): Promise<User | null> {
    return prisma.user.findFirst({ where: { id: id } });
  }

  async createUser({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    return prisma.user.create({
      data: {
        name,
        email,
        password_hash: password,
      },
    });
  }

  async updateUser({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    return prisma.user.update({
      where: { email: email },
      data: {
        name,
        email,
        password_hash: password,
      },
    });
  }

  async deleteUser(id: string): Promise<User> {
    return prisma.user.delete({ where: { id: id } });
  }

}
