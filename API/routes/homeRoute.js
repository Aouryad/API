const express = require ('express');
const routes = express.Router();
const { addProduct } = require("../controllers/productController") 
const { addUser } = require("../controllers/userController") 
routes.route('/login').get()
routes.route('/register').get()
routes.route('/products').post(addProduct)
routes.route('/users').get(addUser)
routes.route('/me').get()

module.exports = routes