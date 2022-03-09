import { Item, Note } from "../models/item.js"

function newItem(req, res) {
  res.render('items/new', {
    title: 'Create New Item'
  })
}

function index(req, res) {
  Item.find({})
  .then(items => {
    res.render('items/index', {
      items,
      title: 'All Items'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/items')
  })
}

// function notesIndex(req, res) {
//   Note.find({})
//   .then(notes => {
//     res.render('items/show', {
//       notes,
//       title: 'Notes'
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/items')
//   })
// }

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.shareStatus = !!req.body.shareStatus
  Item.create(req.body)
    .then(item => {
      res.redirect('/items')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/items')
    })
}

function show(req, res) {
  Item.findById(req.params.id)
  Note.findById(req.params.id)
  .populate('owner')
  .then(item => {
    res.render('items/show', {
      item,
      title: 'Item Information'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/items')
  })
}

function edit(req, res) {
  Item.findById(req.params.id)
  .then(item => {
    res.render('items/edit', {
      item,
      title: 'Update Item'
    })
  })
}

function update(req, res) {
  Item.findById(req.params.id)
  .then(item => {
    if (item.owner.equals(req.user.profile._id)) {
      req.body.shareStatus = !!req.body.shareStatus
      item.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/items/${item._id}`)
      })
    } else {
      throw new Error ('Not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/items`)
  })
}

function deleteItem(req, res) {
  Item.findById(req.params.id)
  .then(item => {
    if (item.owner.equals(req.user.profile._id)) {
      item.delete()
      .then(() => {
        res.redirect('/items')
      })
    } else {
      throw new Error ('Not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/items')
  })
}

function createNote(req, res) {
  req.body.owner = req.user.profile._id
  Note.create(req.body)
  .then(note => {
    res.redirect('/items/:id')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/items')
  })
}

// function showNote(req, res) {
//   Note.findById(req.params.id)
//   .populate('owner')
//   .then(note => {
//     res.redirect('items/:id')
//   })
// }

export {
  newItem as new,
  index,
  create,
  show,
  edit,
  update,
  deleteItem as delete,
  // notesIndex,
  createNote,
  // showNote,
}