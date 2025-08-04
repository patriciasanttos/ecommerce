const express = require("express");
const router = express.Router();
const Vendas = require("../database/schemas/vendas");

router.get("/", async (req, res) => {
  const vendas = await Vendas.findAll();
  return res.status(200).json(vendas);
});

router.post("/", async (req, res) => {
  try {
    console.log("Novo Vendas")
    const { id_pedido, total } = req.body;
    const novaVenda = await Vendas.create({
      id_pedido,
      total,
    });
    res.status(201).json(novaVenda);
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
});

router.put("/:id", async (req, res) => {
  try {
    const vendas = await Vendas.findByPk(req.params.id);
    if (!vendas) {
      return res.status(404).send("Venda não encontrada");
    }
    await vendas.update(req.body);
    return res.status(200).json(vendas);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const vendas = await Vendas.findByPk(req.params.id);
    if (!vendas) {
      return res.status(404).send("Venda não encontrada");
    }
    await vendas.destroy();
    res.status(200).send("Venda apagada com sucesso");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
