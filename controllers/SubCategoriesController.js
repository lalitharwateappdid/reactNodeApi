const SubCategory = require("../models/SubCategoryModel");
const Category = require("../models/CategoryModel");

exports.get = async(req,res) => {
    SubCategory.findAll({
        include: [{
          model: Category,
          attributes: ["id","name"]
        }]  
      })
      .then(subcategories => {
        // Handle the retrieved subcategories data
        return res.status(200).json({
            "data":subcategories
        })
      })
      .catch(error => {
        // Handle errors
        res.status(400).json({
            "data":error
        })
      });
}

exports.create = async(req,res) => {
    const {category_id,name,description} = req.body

    try{
    const subcategory = await SubCategory.create({
        categoryId:category_id,
        name:name,
        description:description,
    })

    res.status(200).json({
        "message":"Sub Category Added Successfully",
        "data":subcategory
    })
}
catch(err){
    res.status(400).json({
        "message":"Something went wrong " + err,
    })
}
}

exports.destroy = async(req,res) => {
    const {id} = req.body;
    try{
        const subcategory = await SubCategory.findByPk(id);

        if(subcategory){
            await Book.destroy({
                where:{
                    id:id
                }
            })
            res.status(200).json({
                "message":"Sub Category Deleted"
            })
        }
        else{
            res.status(400).json({
                "message":"Sub Category Not found"
            })
        }
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}

exports.edit =  async(req,res) => {
    const {id} = req.params

    try{
        const subcategory = await SubCategory.findByPk(id);
        if(subcategory){
            res.status(200).json({
                "data":subcategory
            })
        }
        else{
            res.status(400).json({
                "message":"Sub Category Not Found"
            })
        }
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong"
        })
    }

}


exports.update = async(req,res) => {
    const {id,category_id,name,description} = req.params;

    try{
        const subcategory = await SubCategory.findByPk(id)
        if(subcategory){
            await SubCategory.update({
                category_id:category_id,
                name:name,
                description:description
            },
            {
                where:{
                    id:id
                }
            }
        )
        }
        else{
            res.status(400).json({
                "message":"Something went wrong " + err
            })
        }
    }
    catch(err){
        res.status(400).json({
            "message" :"Something went wrong " + err
        })
    }
}