import { Profile } from "../models/profile.js"

function profileView(req, res) {
  Profile.findById(req.user.profile._id)
  .then(self => {
    const isSelf = self._id.equals(profile._id)
    res.render('profile/profile', {
      title: `${profile.name}'s Account`,
      profile,
      self,
      isSelf,
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