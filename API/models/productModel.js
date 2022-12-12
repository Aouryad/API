const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
name:{
       type:String,
       required:true,
       trim: true
        },
price:{
    type:Number,
    required: true
    },
//"User_id":{
//         type:String,
//         required: true,
//         trim: true
//         },
}     
);

module.exports = mongoose.model('product', productSchema) 

