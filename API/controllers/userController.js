const {response}=require('../app')
const app = require('../app')

let User = require('../models/userModel')
exports.getAllUsers = async (req,res)=>{
// data from db
    const utilisateurs = await User.find()
    res.status(200).json({
        success:true,
        count: utilisateurs.length,
        utilisateurs
    })
}

//-----------ajout---------------------
exports.addUser = async (req, res) => {
    const utilisateur = new User(req.body)
    await utilisateur.save()
    res.status(200).json({
        success:true,
        utilisateur
    })
}
//----------voir utilisateur------------
exports.getUserById =async (req, res, next) => {
 
    const utilisateur =await User.findOne({
        _id :req.params.idUser
    })
    // requete vers db
    res.status(200).json({
        success: true,
        utilisateur
    })

}
//-----------modification de user
 exports.updateUser = async (req, res)=>{
  const update_user = await User.updateOne(
     {_id: req.params.iduser},
     {
        $set:req.body
     }
    ) 
    res.status(200).json({
        success:true,
        update_user
    })
 }

 exports.deleteUserById =async (req, res) => {
 
    const utilisateur =await User.remove({
        _id :req.params.idUser
    })
    // requete vers db
    res.status(200).json({
        success: true,
        utilisateur
    })

}

