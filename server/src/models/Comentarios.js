import moongose from 'mongoose'

const comentarioSchema = new moongose.Schema({
  contenido: String,
  media: String,
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  fechaModificacion: {
    type: Date,
  },
  restado: {
    type: Boolean,
    default: true,
  },
  usuario: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  pulicacion: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'Publicacion',
  },
  reportes: {
    type: Number,
    default: 0,
  },
})

comentarioSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Comentario = moongose.model('Comentario', comentarioSchema)

export default Comentario
