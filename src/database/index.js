const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig)

const Users = require('../model/Users');
const Address = require('../model/Address')
const Techs = require('../model/Techs')

Users.init(connection);
Address.init(connection);
Techs.init(connection);


Address.associate(connection.models)
Users.associate(connection.models)
Techs.associate(connection.models)

module.exports = connection;
