import { User } from '@prisma/client';
import { IUsersRepository } from '../repositories/user-repository.interface';

interface GetUserProfileResponse {
  user: User[];
}

export class GetUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<GetUserProfileResponse> {
    const user = await this.usersRepository.findAll();

    if (!user) {
      throw new Error('User not found');
    }

    return { user };
  }
}
