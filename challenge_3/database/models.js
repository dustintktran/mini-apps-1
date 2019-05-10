const Sequelize = require('sequelize');
const connection = require('./index.js');

const Form = connection.define('info', {
    name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(100)
    },
    cityState: {
        type: Sequelize.STRING(100)
    },
    zip: {
        type: Sequelize.STRING(100)
    },
    phone: {
        type: Sequelize.STRING(100)
    },
    card: {
        type: Sequelize.STRING(50)
    },
    expire: {
        type: Sequelize.STRING(10)
    },
    CVV: {
        type: Sequelize.STRING(5)
    },
    zip2: {
        type: Sequelize.STRING(10)
    }
})

Form.sync({force: true})

module.exports.Form = Form;