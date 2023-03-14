import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Query {
    hello: String
    usuarios: [Usuario]
    todosUsuarios: Int
  }
  type Mutation {
    nuevoUsuario(
      nombre: String!
      email: String!
      password: String!
      imagen: String!
      fechaNacimiento: String!
    ): Usuario
  }
  type Usuario {
    id: String
    nombre: String!
    email: String!
    password: String!
    imagen: String!
    fechaNacimiento: String!
  }
`
