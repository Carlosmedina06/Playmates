import { createServer } from '../server/src/app.js'

import { typeDefs } from './src/graphql/typedefs.js'
import { resolvers } from './src/graphql/resolvers.js'
import { connect } from './src/db.js'

createServer(typeDefs, resolvers)
connect()
