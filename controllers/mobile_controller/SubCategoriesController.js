const db = require("../../database/database");
const Category = require("../../models/CategoryModel");
const Subcategory = require("../../models/SubCategoryModel") 


exports.get = async(req,res) => {
    const {category_id} = req.query
    console.log(req.body)
    try{
        const data = await Subcategory.findAll({
            where:{
                categoryId:category_id
            }
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