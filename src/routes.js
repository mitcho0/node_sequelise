const express = require ('express')
const usersController = require('./controller/UsersController')
const addressController = require('./controller/AddressController')



const routes = express.Router();

//rota do usuario
routes.post('/users',usersController.store)
routes.get('/users',usersController.index)

//rota do address
routes.get('/users/:user_id/address',addressController.index)
routes.post('/users/:user_id/address',addressController.store)



module.exports = routes;
