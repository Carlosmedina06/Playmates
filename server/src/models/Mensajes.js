import mongoose from 'mongoose';

const MensajesSchema = new mongoose.Schema({
  contenido: {
    type: String,
    required: true,
  },
  media: {
    type: String,
    required: false,
  },
  fechaCreación: {
    type: Date,
    required: true,
  },
  fechaActualización: {
    type: Date,
    required: true,
  },
  Leido: {
    type: Boolean,
    required: true,
  },
  Estado: {
    type: Boolean,
    required: true,
  },
  Usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  destinatario: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Grupo',
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
    },
  ],
  reportesRecibidos: {
    type: number,
    default: 0,
  }
})

MensajesSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model('Mensajes', MensajesSchema);
