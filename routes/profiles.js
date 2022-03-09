import { Router } from 'express'
import * as profileCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

router.get('/', isLoggedIn, profileCtrl.index)

export {
  router
}