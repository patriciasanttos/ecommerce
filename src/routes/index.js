function routes(app) {
  app.use("/clientes", require("./clientes"));
  app.use("/estoque", require("./estoque"));
  app.use("/pedidos", require("./pedidos"));
  app.use("/produtos", require("./produtos"));
  app.use("/vendas", require("./vendas"));
}

module.exports = routes;
