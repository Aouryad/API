 const express = require ('express')
 const routes = express.Router()

 const { addUser, getAllUsers, updateUser, getUserById, deleteUserById } = require ('../controllers/userController')

   // User
 routes.route('/users').get(getAllUsers)
 routes.route('/user/:idUser').get(getUserById)
 routes.route('/adduser').post(addUser)
 routes.route('/update/:idUser').patch(updateUser)
 routes.route('/delete/:idUser').delete(deleteUserById)


 module.exports = routes




