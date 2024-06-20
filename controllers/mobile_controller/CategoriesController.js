const db = require("../../database/database");
const Category = require("../../models/CategoryModel");
const Subcategory = require("../../models/SubCategoryModel") 

exports.get = async(req,res) => {
    try{
        const data = await Category.findAll({
            where:{
                status:true
            },
            include: [{
                model: Subcategory,
               
              }]
        })

        res.status(200).json({
            "data":data,
            "status":true
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}