import fastity from 'fastify';
import { usersRoutes } from './http/controllers/usersRoutes';

export const app = fastity();

app.register(usersRoutes);

app.get('/', () => {
  return { message: [new Date()] };
});
