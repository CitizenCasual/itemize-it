import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
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