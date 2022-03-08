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
  Item.create(req.body)
    .then(item => {
      res.redirect('items/index')
    })
    .catch(err => {
      console.log(err)
      res.redirect('items/index')
    })
}

export {
  newItem as new,
  index,
  create,
}