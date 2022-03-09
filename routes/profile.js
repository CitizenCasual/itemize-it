import { Router } from 'express'
import * as profileCtrl from '../controllers/profile.js'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

router.get('/profile', isLoggedIn, profileCtrl.index)

export {
  router
}