import moongose from 'mongoose'

const grupoSchema = new moongose.Schema({
  nombre: String,
  imagen: String,
  descripcion: String,
  fechaCreación: {
    type: Date,
    default: Date.now,
  },
  fechaActualizacion: {
    type: Date,
  },
  estado: {
    type: Boolean,
    default: true,
  },
  usuarios: [
    {
      type: moongose.Schema.Types.ObjectId,
      ref: 'Usuario',
    },
  ],
  juego: String,
  Mensajes: [
    {
      type: moongose.Schema.Types.ObjectId,
      ref: 'Mensaje',
    },
  ],
  Valoraciones: [
    {
      type: moongose.Schema.Types.ObjectId,
      ref: 'Usuario',
    },
  ],
  Reportes: {
    type: Number,
    default: 0,
  },
})

grupoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Grupo = moongose.model('Grupo', grupoSchema)

export default Grupo
