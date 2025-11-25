import {Router} from 'express'
import CardController from '../controllers/CardController.js'


const router = Router()

// Rotas da tabela Card

// Rota para criar um card
router.post('/', CardController.create)

// Rota para puxar (listar) os cards
router.get('/', CardController.list)

// Rota para deletar um card pelo ID
router.delete('/:id', CardController.delete)

// Rota para atualizar um card 
router.patch('/:id', CardController.update)

export default router