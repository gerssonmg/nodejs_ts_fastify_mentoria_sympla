import fastity from 'fastify';

export const app = fastity();

app.get('/', () => {
  return { message: [new Date()] };
});
