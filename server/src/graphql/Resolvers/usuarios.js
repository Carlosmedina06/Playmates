import Usuario from '../../models/Usuario.js'

export const usuarios = async () => {
  const usuarios = await Usuario.find()

  return usuarios
}

export const todosUsuarios = () => {
  const usuarios = Usuario.find()

  return usuarios.length
}

export const nuevoUsuario = async (_, args) => {
  const { nombre, email, password, imagen, fechaNacimiento } = args
  const verificación = await Usuario.findOne({ email })

  if (verificación) throw new Error('El usuario ya existe')
  const usuarioCreado = new Usuario({
    nombre,
    email,
    password,
    imagen,
    fechaNacimiento,
  })

  await usuarioCreado.save()

  return usuarioCreado
}
