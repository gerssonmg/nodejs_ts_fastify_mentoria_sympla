import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaUsersRepository } from '../repositories/user-repository';
import { GetUserProfileUseCase } from '../services/get-user-profile';

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  const usersRepository = new PrismaUsersRepository();
  const useCase = new GetUserProfileUseCase(usersRepository);

  const response = await useCase.execute();

  return reply.status(200).send(response);
}
