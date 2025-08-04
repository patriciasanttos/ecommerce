const express = require("express");
const router = express.Router();
const Clientes = require("../database/schemas/clientes");

router.get("/", async (req, res) => {
  const clientes = await Clientes.findAll();
  return res.status(200).json(clientes);
});

router.post("/", async (req, res) => {
  try {
    console.log("Novo Cliente")
    const { nome, cpf, dataDeNascimento, email, telefone, endereco } = req.body;
    const novoCliente = await Clientes.create({
      nome,
      cpf,
      dataDeNascimento,
      email,
      telefone,
      endereco,
    });
    res.status(201).json(novoCliente);
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
});

router.put("/:id", async (req, res) => {
  try {
    const cliente = await Clientes.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).send("Cliente não encontrado");
    }
    await cliente.update(req.body);
    return res.status(200).json(cliente);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cliente = await Clientes.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).send("Cliente não encontrado");
    }
    await cliente.destroy();
    res.status(200).send("Cliente apagado com sucesso");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
