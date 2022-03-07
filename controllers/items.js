import { Item } from "../models/item.js"

function newItem(req, res) {
  res.render('items/new', {
    title: 'Add Item'
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.shareStatus = !!req.body.shareStatus
  Item.create(req.body)
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

export {
  newItem as new,
  index,
  create,
}