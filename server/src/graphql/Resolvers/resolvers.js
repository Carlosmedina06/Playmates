import { usuarios, todosUsuarios, nuevoUsuario } from './usuarios.js'

export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    usuarios,
    todosUsuarios,
  },
  Mutation: {
    nuevoUsuario,
  },
}
