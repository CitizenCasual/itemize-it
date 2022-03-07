import mongoose from "mongoose";

const Schema = mongoose.Schema

const itemNoteSchema = newSchema({
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  content: String,
  item: {Item},
})

const itemSchema = newSchema({
  title: String,
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  notes: [itemNoteSchema],
  condition: Number,
  date: Number,
  shareStatus: Boolean,
})

const Item = mongoose.model('Item', itemSchema)

export {
  Item,
}