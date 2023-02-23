import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const { PASS } = process.env

export const connect = async () => {
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(
      `mongodb+srv://carlosmedina06:${PASS}@carlosdb.9aqig43.mongodb.net/?retryWrites=true&w=majority`,
    )
    // eslint-disable-next-line no-console
    console.log('🚀 Database ready')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('🚀 Database error', error)
  }
}
