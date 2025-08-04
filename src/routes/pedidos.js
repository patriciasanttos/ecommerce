const express = require("express");
const router = express.Router();
const Pedidos = require("../database/schemas/pedidos");

router.get("/", async (req, res) => {
  const pedidos = await Pedidos.findAll();
  return res.status(200).json(pedidos);
});

router.post("/", async (req, res) => {
  try {
    console.log("Novo Pedido")
    const { id_produto, id_cliente, quantidade, subtotal  } = req.body;
    const novoPedido = await Pedidos.create({
      id_produto,
      id_cliente,
      quantidade,
      subtotal,
    });
    res.status(201).json(novoPedido);
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
});

router.put("/:id", async (req, res) => {
  try {
    const pedidos = await Pedidos.findByPk(req.params.id);
    if (!pedidos) {
      return res.status(404).send("Pedido não encontrado");
    }
    await pedidos.update(req.body);
    return res.status(200).json(pedidos);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const pedidos = await Pedidos.findByPk(req.params.id);
    if (!pedidos) {
      return res.status(404).send("Pedido não encontrado");
    }
    await pedidos.destroy();
    res.status(200).send("Pedido apagado com sucesso");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
