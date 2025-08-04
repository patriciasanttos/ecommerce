const express = require("express");
const router = express.Router();
const Produtos = require("../database/schemas/produtos");

router.get("/", async (req, res) => {
  const produtos = await Produtos.findAll();
  return res.status(200).json(produtos);
});

router.post("/", async (req, res) => {
  try {
    console.log("Novo produto")
    const { nome, preco, descricao, marca } = req.body;
    const novoProduto = await Produtos.create({ nome, preco, descricao, marca });
    res.status(201).json(novoProduto);
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
});

router.put("/:id", async (req, res) => {
  try {
    const produto = await Produtos.findByPk(req.params.id);
    if (!produto) {
      return res.status(404).send("Produto não encontrado");
    }
    await produto.update(req.body);
    return res.status(200).json(produto);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const produto = await Produtos.findByPk(req.params.id);
    if (!produto) {
      return res.status(404).send("Produto não encontrado");
    }
    await produto.destroy();
    res.status(200).send("Produto apagado com sucesso");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
