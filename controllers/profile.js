import { Profile } from "../models/profile.js"

function profileView(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
      res.render('profile/profile', {
        profile,
        title: 'Your Profile',
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect('/')
    })
}

export {
  profileView,
}