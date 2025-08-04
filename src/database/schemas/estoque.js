const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequilize");

const Estoque = sequelize.define(
  "estoque",
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
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "estoque",
    timestamps: true,
  }
);

Estoque.sync({ alter: true });

module.exports = Estoque;