import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.find({})
  .then(profile => {
    res.render('profile/index', {
      profile,
      title: 'Account Info'
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