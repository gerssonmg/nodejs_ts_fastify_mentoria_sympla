import fastity from 'fastify';

const app = fastity();

app.get('/', () => {
  return { message: [new Date()] };
});

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333');
});
