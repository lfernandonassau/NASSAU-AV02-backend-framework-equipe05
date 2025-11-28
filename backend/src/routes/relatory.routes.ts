import {Router} from 'express'
import RelatoryController from '../controllers/RelatoryController.js'

const router = Router ()

router.get('/', RelatoryController.list ) 
router.patch('/:id', RelatoryController.update )

export default router;