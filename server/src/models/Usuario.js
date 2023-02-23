import mongoose from 'mongoose'


const UsuarioSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
  },
  rol: {
    type: String,
  },
  imagen: {
    type: String,
  },
  fechaNacimiento: {
    type: Date,
  },
  fechaRegistro: {
    type: Date.now,
  },
  fechaActualizacion: {
    type: Date,
  },
  fechaEliminacion: {
    type: Date.now,
  },
  estado: {
    type: Boolean,
  },
  juegos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Juego',
    },
  ],
  amigos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
    },
  ],
  solicitudesAmistad: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
    },
  ],
  grupos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Grupo',
    },
  ],
  solicitudesGrupo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Grupo',
    },
  ],
  mensajes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mensaje',
    },
  ],
  notificaciones: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Notificacion',
    },
  ],
  publicaciones: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Publicacion',
    },
  ],
  comentarios: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comentario',
    },
  ],
  valoraciones: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
    },
  ],
  reportesAUsuarios: {
    type: Array,
  },
  reportesRecibidos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reporte',
    },
  ],
  reportesComentarios: {
    type: Array,
  },
  reportesGrupos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reporte',
    },
  ],
})

UsuarioSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v

    delete returnedObject.password
  },
})

const Usuario = mongoose.model('Usuario', UsuarioSchema)

export default Usuario
