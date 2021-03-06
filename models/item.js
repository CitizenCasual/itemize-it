import mongoose from "mongoose";

const Schema = mongoose.Schema

const itemNoteSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  content: String,
}, {
  timestamps: true
})

const Note = mongoose.model('Note', itemNoteSchema)

const itemSchema = new Schema({
  title: String,
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  hours: Number,
  condition: Number,
  date: {
    type: Date,
  },
  shareStatus: Boolean,
  notes: [itemNoteSchema]
}, {
  timestamps: true
})

const Item = mongoose.model('Item', itemSchema)

export {
  Note,
  Item,
}