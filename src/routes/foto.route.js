import { Router } from 'express'
import FotoController from '../controllers/foto.controller.js'
import { FotoValidator , FotoIdValidator , updateFotoValidator } from '../validators/foto.validator.js'

const router = Router()

router.get('/', FotoController.index)
router.post('/', FotoValidator, FotoController.create)
// router.get('/:id', ProdutoIdValidator, ProdutoController.show)
// router.put('/:id', updateProdutoValidator, ProdutoController.update)
// router.delete('/:id', ProdutoIdValidator, ProdutoController.delete)

export default router