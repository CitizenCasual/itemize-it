import { Item } from "../models/item.js"

function newItem(req, res) {
  res.render('items/new', {
    title: 'Add Item'
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
}