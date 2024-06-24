const db = require("../../database/database");
const CategoryLiterature = require("../../models/CategoryLiterature");


// exports.get = async(req,res) => {
//     try{
//         const data = await CategoryLiterature.findAll()

//         res.status(200).json({
//             data:data
//         })
//     }
//     catch(err){
//         res.status(400).json({
//             "message" :"Something went wrong " + err
//         })
//     }
// }