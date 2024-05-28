import { body, param } from 'express-validator'

export const FotoValidator = [
  body('titulo').isString().withMessage("titulo é obrigatorio"),
  body('url').isString().withMessage("URL é é obrigatorio"),
  body('produtoId').isInt().withMessage("produtoId é obrigatorio"),
]

export const updateFotoValidator = [
    param('id').isInt().withMessage("id é obrigatório"),
    body('titulo').isString().withMessage("titulo é obrigatorio"),
    body('url').isString().withMessage("URL é é obrigatorio"),
    body('produtoId').isInt().withMessage("produtoId é obrigatorio"),
  ]

export const FotoIdValidator = [
    param('id').isInt().withMessage("id é obrigatório")
]
