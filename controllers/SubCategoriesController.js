const db = require("../database/database");

exports.get = (req,res) => {
    db.query("SELECT * FROM sub_categories ORDER BY id desc",(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong" + err
            })
        }

        return res.status(200).json({
            "data":result
        })
    })
}

exports.create = (req,res) => {
    const {category_id,name,description} = req.body
    console.log(req.body)

    db.query("INSERT INTO sub_categories (category_id,name,description) VALUES(?,?,?)",[category_id,name,description],(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong " + err
            })
        }

        return res.status(200).json({
            "message":"Data Added Successfully!",
        })
    });
}

exports.destroy = (req,res) => {
    const {id} = req.body;

    db.query("DELETE FROM sub_categories WHERE id=?",[id],(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong " +err
            })
        }

        if(result.affectedRows ===0) {
            return res.status(400).json({
                "message":"Sub Category not found"
            })
        }

        return res.status(200).json({
            "message":"Data Deleted Successfully",
        
        })


    })
}

exports.edit = (req,res) => {
    const {id} = req.params

    db.query("SELECT * FROM sub_categories WHERE id=?",[id],(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong " + err
            })
        }

        if(result.affectedRows ===0) {
            return res.status(400).json({
                "message":"Not Found"
            })
        }

        return res.status(200).json({
            "message":"Data Updated Successfully!",
            "data":result
        })
    })
}


exports.update = (req,res) => {
    const {id,category_id,name,description} = req.params;

    db.query("UPDATE sub_categories SET category_id=?,name=?,description=? WHERE id=?",[category_id,name,description,id],(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong " + err
            })
        }

        return res.status(200).json({
            "message":"Data Updated Successfully",
        })
    })
}