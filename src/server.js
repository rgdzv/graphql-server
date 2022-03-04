const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const cors = require("cors")
require("dotenv").config()
const typeDefs = require("./schema")
const resolvers = require("./resolver")
const formatError = require("./errors")
const { verifyJWT_MW } = require("./utils")

async function startApolloServer(typeDefs, resolvers) {

  const app = express()
  const port = 4000
  const path = "/api"
  const errorName = formatError.errorName;

  app.use(cors())
  app.use(verifyJWT_MW)

  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: ({ req }) => ({
      user: req.decodedToken,
      errorName,
    }),
    formatError: (err) => {
      return formatError.getError(err);
    }, 
  })
  await server.start()

  server.applyMiddleware({ app, path })

  await new Promise(resolve => app.listen({ port }, resolve))

  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
}

startApolloServer(typeDefs, resolvers)

