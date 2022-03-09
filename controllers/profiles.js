import { Profiles } from "../models/profiles.js"

function index(req, res) {
  Profiles.find({})
  .then(profile => {
    res.render('profiles/index', {
      profile,
      title: 'Active Users'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/items')
  })
}

export {
  index,
}