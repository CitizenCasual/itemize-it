import { Router } from "express"
import * as itemsCtrl from '../controllers/items.js'
import { isLoggedIn } from "../middleware/middleware.js"
const router = Router()

router.get('/', itemsCtrl.index)
router.get('/new', itemsCtrl.new)
router.post('/', isLoggedIn, itemsCtrl.create)
router.get('/:id', itemsCtrl.show)
router.get('/:id/edit', isLoggedIn, itemsCtrl.edit)
router.put('/:id', isLoggedIn, itemsCtrl.update)
router.delete('/:id', isLoggedIn, itemsCtrl.delete)
router.get('/:id/newNote', itemsCtrl.edit)
// router.post('/:id', isLoggedIn, itemsCtrl.createNote)


export {
  router,
}