import mongoose from 'mongoose'

const PublicacionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
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

export default mongoose.model('Publicacion', PublicacionSchema)
