 const express = require ('express');
 const routes = express.Router();
 const {getProductById, addProduct, updateProduct, getAllProducts } = require ('../controllers/productController')

// //   all products
routes.route('/products').get(getAllProducts)
  routes.route('/product/:idProd').get(getProductById)
 routes.route('/addproduct').post(addProduct)
  routes.route('/update/:idProd').patch(updateProduct)
 module.exports = routes
