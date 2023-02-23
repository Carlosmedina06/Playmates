import { createServer } from '../server/src/app.js'

import { typeDefs } from './src/graphql/TypeDefs/typedefs.js'
import { resolvers } from './src/graphql/Resolvers/resolvers.js'
import { connect } from './src/db.js'

createServer(typeDefs, resolvers)
connect()
