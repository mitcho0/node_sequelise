const express = require ('express')
const usersController = require('./controller/UsersController')
const addressController = require('./controller/AddressController')
const techController = require('../src/controller/TechController')


const routes = express.Router();

//rota do usuario
routes.post('/users',usersController.store)
routes.get('/users',usersController.index)

//rota do address
routes.get('/users/:user_id/address',addressController.index)
routes.post('/users/:user_id/address',addressController.store)

//rota do tecnologia
routes.get('/users/:user_id/techs',techController.index)
routes.post('/users/:user_id/techs',techController.store)

module.exports = routes;
