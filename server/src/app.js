import http from 'http'

import express from 'express'
import cors from 'cors'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'

export async function createServer(typeDefs, resolvers) {
  const app = express()
  const serverHttp = http.createServer(app)
  const server = new ApolloServer({ typeDefs, resolvers })

  await server.start()

  app.use('/graphql', cors(), express.json(), expressMiddleware(server))

  await new Promise((resolve) => serverHttp.listen({ port: 4000 }, resolve))
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at http://localhost:4000`)
}
