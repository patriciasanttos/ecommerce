const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequilize");

const Pedidos = sequelize.define(
  "pedidos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
    },
  },
  {
    tableName: "pedidos",
    timestamps: true,
  }
);

Pedidos.sync({ alter: true });

module.exports = Pedidos;