npm init -y

pnpm i typescript @types/node tsx tsup -D

tsx: Para rodar o servidor com codigo TS, pois
o nodeJS, não suporta ainda

tsup: Converter o codigo de TS para JS, fazendo o build
para deploy

npx tsc --init

pnpm i fastify

pnpm i prisma -D

pnpm i dotenv
pnpm i zod

pnpm i eslint

npx eslint --init

npx prisma init

Criei a tabela no schema.prisma
Precisa ter o DB rodando, para os demais comandos

Subi um postgreSQL, com o docker:

- ignite-nodejs-03-api-solid-nodejs is 📦 1.0.0 on 🐳 v25.0.1 …
  ➜ docker run --name meu_postgres_nodejs_bot -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
  fbbbb6232d8a354d3145789f0b72e670f3efa9c9d7b8b3c357ef5fa1de8dee12

npx prisma migrate dev

Vai gerar as migrations

Para abrir o prisma studio
npx prisma studio
