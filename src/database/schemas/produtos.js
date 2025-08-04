const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequilize");

const Produtos = sequelize.define(
  "produtos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "nome",
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "produtos",
    timestamps: true,
  }
);

Produtos.sync({ alter: true });

module.exports = Produtos;