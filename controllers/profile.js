import { Profile } from "../models/profile.js"

function profileView(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    if (user) {
      res.render('profile/view'), {
        profile,
        title: 'Account Information'
      }
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/items`)
  })
}

export {
  profileView,
}