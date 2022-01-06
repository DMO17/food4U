const Sequelize = require("sequelize");

const connection = new Sequelize(
  // Database name
  "food4u_db",
  // User
  "root",
  // Password
  "Password123",
  {
    // Database location
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = connection;
