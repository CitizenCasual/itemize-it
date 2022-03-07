import { Item } from "../models/item.js"

function newItem(req, res) {
  res.render('items/new', {
    title: 'Add Item'
  })
}

function create(req, res) {
  const item = new Item(req.body)
  item.save(function(err) {
    if (err) return res.redirect('/items/new')
    res.redirect('/items')
  })
}

function index(req, res) {
  Item.find({}, function(err, items) {
    res.render('items/index', {
      err,
      items,
      title: 'All Items'
    })
  })
}





export {
  newItem as new,
  index,
  create,
}