const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequilize");

const Clientes = sequelize.define(
  "clientes",
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
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    dataDeNascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "clientes",
    timestamps: true,
  }
);

Clientes.sync({ alter: true });

module.exports = Clientes;