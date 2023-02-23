import mongoose from 'mongoose'

const NotificacionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  titulo: {
    type: String,
  },
  contenido: {
    type: String,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  fechaActualizacion: {
    type: Date,
  },
  leida: {
    type: Boolean,
  },
  estado: {
    type: Boolean,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
})

export default mongoose.model('Notificacion', NotificacionSchema)
