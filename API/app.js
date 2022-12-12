const express = require('express')
prod_route = require('./routes/productRoute')
user_route = require('./routes/userRoute')
//home_route = require('./routes/homeRoute')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./API/config/config.env'})
PORT = process.env.PORT

const app = express()
app.use(express.json())

app.use('/',prod_route);
app.use('/',user_route);

//  connection
const DB = process.env.db_con
mongoose.connect(DB, ()=> console.log('Database connected'))

app.listen(PORT,()=> console.log(`server is running on ${PORT}`))
