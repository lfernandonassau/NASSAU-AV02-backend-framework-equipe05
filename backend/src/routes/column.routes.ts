import {Router} from 'express'
import ColumnController from '../controllers/ColumnController.js'

const router = Router()

//Rotas da tabela coluna.

//Rota para criar uma coluna.
router.post('/' ,ColumnController.create)

//Rota para puxar a coluna.
router.get('/',ColumnController.list)

//Rota para deletar uma coluna.
router.delete('/:id', ColumnController.delete)

export default router