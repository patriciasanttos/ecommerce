const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequilize");

const Vendas = sequelize.define(
  "vendas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
    },
  },
  {
    tableName: "vendas",
    timestamps: true,
  }
);

Vendas.sync({ alter: true });

module.exports = Vendas;