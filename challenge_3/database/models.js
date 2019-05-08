const Sequelize = require('sequelize');
const connection = require('./index.js');

const Test = connection.define('checkout', {
    testItem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    testCost: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    connection, timestamps: false
})

module.exports.Test = Test;