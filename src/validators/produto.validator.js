import { body, param } from 'express-validator'

export const ProdutoValidator = [
  body('nome').isString().withMessage("nome é obrigatorio"),
  body('preco').isNumeric().withMessage("Preco é é obrigatorio"),
  body('descricao').isString().withMessage("Descrição é obrigatorio"),
]

export const updateProdutoValidator = [
    param('id').isInt().withMessage("id é obrigatório"),
    body('nome').isString().withMessage("nome é obrigatorio"),
    body('preco').isNumeric().withMessage("Preco é é obrigatorio"),
    body('descricao').isString().withMessage("Descrição é obrigatorio"),
  ]

export const ProdutoIdValidator = [
    param('id').isInt().withMessage("id é obrigatório")
]
