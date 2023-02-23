import mongoose from 'mongoose'

const PublicacionSchema = new mongoose.Schema({
  contenido: {
    type: String,
    required: true,
  },
  media: {
    type: String,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  fechaActualizacion: {
    type: Date,
  },
  estado: {
    type: Boolean,
  },
  usuario: {
    type: String,
    required: true,
  },
  juego: {
    type: String,
  },
  comentarios: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comentario',
  },
  reportes: {
    type: Number,
    default: 0,
  },
})

PublicacionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('Publicacion', PublicacionSchema)
