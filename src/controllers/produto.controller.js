import Produto from '../models/produto.model.js'
import { validationResult } from 'express-validator'

export default class ProdutoController {

  static validate(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return false;
    }
    return true;
  }

  static async findProduto(req, res) {
    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
       },
      include:{
        fotos: true
    }
    });
    if (!produto) {
      res.status(404).json({ message: 'Produto não encontrado' });
      return null;
    }
    return produto;
  }

  static async index(req, res) {
    const produtos = await Produto.findMany({
      include:{
        fotos: true
    }
    });
    res.json(produtos);
  }

  static async create(req, res) {
    if (!ProdutoController.validate(req, res)) return;
    const produto = await Produto.create({ data: req.body });
    res.json(produto);
  }

  static async show(req, res) {
    if (!ProdutoController.validate(req, res)) return;
    const produto = await ProdutoController.findProduto(req, res);


    if (produto) res.json(produto);
  }

  static async update(req, res) {
    if (!ProdutoController.validate(req, res)) return;
    const produto = await ProdutoController.findProduto(req, res);
    if (!produto) return;

    const updatedProduto = await Produto.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    });
    res.json(updatedProduto);
  }

  static async delete(req, res) {
    if (!ProdutoController.validate(req, res)) return;
    const produto = await ProdutoController.findProduto(req, res);
    if (!produto) return;

    await Produto.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(204).json({ message: 'Produto deletado com sucesso' });
  }
}
