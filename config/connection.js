require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      // if not 8889, change to the port that your SQL uses.
      port: 8889,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
