const express = require("express");
const router = express.Router();
const Estoque = require("../database/schemas/estoque");

router.get("/", async (req, res) => {
  const estoque = await Estoque.findAll();
  return res.status(200).json(estoque);
});

router.post("/", async (req, res) => {
  try {
    console.log("Novo Estoque")
    const { id_produto, quantidade } = req.body;
    const novoEstoque = await Estoque.create({
      id_produto,
      quantidade,
    });
    res.status(201).json(novoEstoque);
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
});

router.put("/:id", async (req, res) => {
  try {
    const estoque = await Estoque.findByPk(req.params.id);
    if (!estoque) {
      return res.status(404).send("Estoque não encontrado");
    }
    await estoque.update(req.body);
    return res.status(200).json(estoque);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const estoque = await Estoque.findByPk(req.params.id);
    if (!estoque) {
      return res.status(404).send("Estoque não encontrado");
    }
    await estoque.destroy();
    res.status(200).send("Estoque apagado com sucesso");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
