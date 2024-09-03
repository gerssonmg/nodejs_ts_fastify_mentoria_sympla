import { FastifyReply, FastifyRequest } from 'fastify';
import { GetUserProfileUseCase } from '../services/userService';

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {

  const getUserProfileUseCase = new GetUserProfileUseCase();

  const response = await getUserProfileUseCase.getUsers();

  return reply.status(200).send(response);
}

export async function getUser(request: FastifyRequest, reply: FastifyReply) {
  const getUserProfileUseCase = new GetUserProfileUseCase();

  const response = await getUserProfileUseCase.getUser('1')

  return reply.status(200).send(response);
}

export async function createUser(request: FastifyRequest, reply: FastifyReply) {

  const getUserProfileUseCase = new GetUserProfileUseCase();

  const response = await getUserProfileUseCase.createUser();

  return reply.status(200).send(response);
}

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {

  const getUserProfileUseCase = new GetUserProfileUseCase();

  const response = await getUserProfileUseCase.updateUser();

  return reply.status(200).send(response);
}

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  const getUserProfileUseCase = new GetUserProfileUseCase();

  const response = await getUserProfileUseCase.deleteUser();

  return reply.status(200).send(response);
}
