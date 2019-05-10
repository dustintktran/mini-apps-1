const Sequelize = require('sequelize');
const connection = new Sequelize('checkout', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
})

connection 
    .authenticate()
    .then(() => console.log('Database Accessed'))
    .catch(()=>console.log('Problem connecting to the Database'))

module.exports = connection;