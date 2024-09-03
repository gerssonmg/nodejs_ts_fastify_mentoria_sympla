import { User } from '@prisma/client';
import { PrismaUsersRepository } from '../repositories/userRepository';

interface GetUsersProfileResponse {
  user: User[];
}
interface GetUserProfileResponse {
  user: User;
}

export class GetUserProfileUseCase {

  async getUsers(): Promise<GetUsersProfileResponse> {
    const usersRepository = new PrismaUsersRepository();

    const user = await usersRepository.getUsers();

    if (!user) {
      throw new Error('User not found');
    }

    return { user };
  }

  async getUser(id: string): Promise<GetUserProfileResponse> {
    const usersRepository = new PrismaUsersRepository();
    const user = await usersRepository.getUser(id);

    if (!user) {
      throw new Error('User not found');
    }

    return { user };
  }

  async createUser(): Promise<GetUserProfileResponse> {
    const usersRepository = new PrismaUsersRepository();
    const user = await usersRepository.createUser({
      name: 'Gerson',
      email: 'gerson@gmail.com',
      password: '12345678'
    });

    if (!user) {
      throw new Error('User not found');
    }

    return { user };
  }

  async updateUser(): Promise<GetUserProfileResponse> {
    const usersRepository = new PrismaUsersRepository();
    const user = await usersRepository.updateUser({
      name: 'Gerson',
      email: 'gerson@gmail.com',
      password: '12345678'
    });
    if (!user) {
      throw new Error('User not found');
    }

    return { user };
  }

  async deleteUser(): Promise<GetUserProfileResponse> {
    const usersRepository = new PrismaUsersRepository();
    const user = await usersRepository.deleteUser('1');

    if (!user) {
      throw new Error('User not found');
    }

    return { user };
  }
}
