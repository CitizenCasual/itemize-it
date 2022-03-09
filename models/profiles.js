import mongoose from 'mongoose'
import { Item } from '../models/item.js'

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,

}, {
  timestamps: true
})

const Profiles = mongoose.model('Profile', profileSchema)

export {
  Profiles,
}
