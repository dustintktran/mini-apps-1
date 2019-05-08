const Sequelize = require('sequelize');
const connection = new Sequelize('checkout', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

connection
  .authenticate()
  .then(() => console.log('Database Accessed'))
  .catch(() => console.log('Could Not Connect to Database'));

module.exports = connection;