import { Item } from "../models/item.js"

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
  
}

export {
  newItem as new,
  index,
  create,
  show,
  edit,
  update,
}