import Foto from '../models/foto.model.js'
import { validationResult } from 'express-validator'


export default class FotoController {

  static validate(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return false;
    }
    return true;
  }

  static async findProduto(req, res) {
    const foto = await Foto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    });
    if (!produto) {
      res.status(404).json({ message: 'Foto não encontrada' });
      return null;
    }
    return foto;
  }

  static async index(req, res) {
    const fotos = await Foto.findMany();
    res.json(fotos);
  }

  static async create(req, res) {
    if (!FotoController.validate(req, res)) return;
    const foto = await Foto.create({ data: req.body });
    res.json(foto);
  }

  static async show(req, res) {
    if (!ProdutoController.validate(req, res)) return;
    const produto = await ProdutoController.findProduto(req, res);
    where: {
      id:Number(req.params.id)
    }

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
