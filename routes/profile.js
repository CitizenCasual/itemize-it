import { Router } from 'express'
import * as profileCtrl from '../controllers/profile.js'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

router.get('/:id/profile', isLoggedIn, profileCtrl.profileView)

export {
  router
}