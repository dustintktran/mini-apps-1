const Sequelize = require('sequelize');
const connection = require('./index.js');

// const Test = connection.define('checkout', {
//     testItem: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     testCost: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// }, {
//     connection, timestamps: false
// })

const FormData = connection.define('checkout', {
    name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING(12),
        allowNull: false
    },
    payment: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
})

module.exports.FormData = FormData;
