const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig)

const Users = require('../model/Users');
const Address = require('../model/Address')


Users.init(connection);
Address.init(connection);

Address.associate(connection.models)
Users.associate(connection.models)


module.exports = connection;
