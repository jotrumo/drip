const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('../index.js');

const User = sequelize.define("user", {
  userName: DataTypes.STRING,
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  streetAddress: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  password: DataTypes.STRING,
});

const Flora = sequelize.define("plant", {
  name: DataTypes.STRING,
  type: DataTypes.STRING,
  gpw: DataTypes.INTEGER,
  ipw: DataTypes.INTEGER,
  events: DataTypes.INTEGER,
});

// sequelize.sync({force:true})

module.exports = {
  User: User,
  Flora: Flora,
}