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
  req.body.owner = req.user.profile._id
  Item.create(req.body)
    .then(item => {
      res.redirect('/items')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/items')
    })
}

export {
  index,
  create,
}