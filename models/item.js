import mongoose from "mongoose";

const Schema = mongoose.Schema

const itemSchema = newSchema({
  title: String,
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  notes: [{type: Schema.Types.ObjectId, ref: 'itemNoteSchema'}],
  condition: Number,
  date: Number,
  shareStatus: Boolean,
})

const Item = mongoose.model('Item', itemSchema)

export {
  Item,
}