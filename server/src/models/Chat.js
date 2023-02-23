import mongoose from 'mongoose'


const ChatSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },

  mensajes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mensaje',
    },
  ],
  usuario: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
    },
  ],
})

ChatSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v

    delete returnedObject.password
  },
})

const Chat = mongoose.model('Chat', ChatSchema)

export default Chat
