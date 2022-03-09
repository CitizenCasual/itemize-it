import mongoose from 'mongoose'


const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  items: [itemSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
