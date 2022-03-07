import { Router } from "express"
import * as itemsCtrl from '../controllers/items.js'
const router = Router()

router.get('/', flightsCtrl.index)
router.get('/new', itemsCtrl.new)
router.post('/', itemsCtrl.create)

export {
  router
}