
let Product = require('../models/productModel')
exports.getAllProducts = async (req,res)=>{
// data from db
    const produits = await Product.find()
    res.status(200).json({
        success:true,
        count: produits.length,
        produits
    })
}

//------------ajout--------------------
exports.addProduct = async (req, res) => {
    const produit = new Product(req.body)
    await produit.save()
    res.status(200).json({
        success:true,
        produit
    })
}
//----------voir produit------------
exports.getProductById = async (req, res, next) => {
 
    const produit = await Product.findOne({
        _id :req.params.idProd
    })
    // requete vers db
    res.status(200).json({
        success: true,
        produit
    })

}
//-----------modification de produit
 exports.updateProduct = async (req, res)=>{
  const update_prod = await Product.updateOne(
     {_id: req.params.idprod},
     {
        $set:req.body
     }
    ) 
    res.status(200).json({
        success:true,
        update_prod
    })
 }
