import { Router } from "express"
import * as itemsCtrl from '../controllers/items.js'
import { isLoggedIn } from "../middleware/middleware.js"
const router = Router()

router.get('/', itemsCtrl.index)


export {
  router
}