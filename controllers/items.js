import { Item } from "../models/item.js"

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
  
}

export {
  index,
  create,
}