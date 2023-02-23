import mongoose from 'mongoose'

const NotificacionSchema = new mongoose.Schema({
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

NotificacionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('Notificacion', NotificacionSchema)
