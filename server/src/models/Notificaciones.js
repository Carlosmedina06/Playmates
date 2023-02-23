import mongoose from 'mongoose'

const NotificacionesSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  titulo: {