import { FastifyInstance } from 'fastify';
import { profile } from './profile';

export async function usersRoutes(app: FastifyInstance) {
  app.get('/users', profile);
}
