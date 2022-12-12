

/*const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./API/config/config.env'})
PORT = process.env.PORT

//  connection
const DB = process.env.db_con
mongoose.connect(DB, ()=> console.log('Database connected'))

app.listen(PORT,()=> console.log(`server is running on ${PORT}`))