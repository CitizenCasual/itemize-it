import { Profile } from "../models/profile.js"

function profileView(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    if (profile.)
  })
}

export {
  profileView,
}