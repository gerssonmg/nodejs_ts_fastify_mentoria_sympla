import { FastifyInstance } from 'fastify';
import { createUser, deleteUser, getUser, getUsers, updateUser } from './userController';

export async function usersRoutes(app: FastifyInstance) {
  app.get('/users', getUsers);
  app.get('/user/:id', getUser);

  app.post('/user', createUser);
  app.put('/user', updateUser);

  app.delete('/user/:id', deleteUser);
}
