const { Sequelize } = require('sequelize');
const db = new Sequelize('database', 'postgres', 'postgres123', {
  host: 'database',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
