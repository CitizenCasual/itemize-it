import mongoose from "mongoose";

const Schema = mongoose.Schema

const itemSchema = new Schema({
  title: String,
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  hours: Number,
  condition: Number,
  date: {
    type: Date,
  },
  shareStatus: Boolean,
}, {
  timestamps: true
})

const Item = mongoose.model('Item', itemSchema)

export {
  Item,
}