import mongoose from "mongoose";

const Schema = mongoose.Schema

const itemSchema = new Schema({
  title: String,
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  condition: Number,
  date: Number,
  shareStatus: Boolean,
})

const Item = mongoose.model('Item', itemSchema)

export {
  Item,
}