const db = require("../database/database");

exports.get = (req,res) => {
    db.query("SELECT * FROM categories ORDER BY id DESC",(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong",
                "status":true
            })
        }

        return res.status(200).json({
            "status":true,
            "data":result
        })
    })
}

exports.create = (req,res) => {
    const {name,description} = req.body;
    db.query("INSERT INTO categories (name,description) VALUES(?,?)",[name,description],(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong " + err
            })
        }

        return res.status(200).json({
            "message":"Data Added Successfully"
        })
    })
}

exports.destroy = (req,res) => {
    const {id} = req.body;

    db.query("DELETE FROM categories WHERE id=?",[id],(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong"
            })
        }

        if(result.affectedRows == 0){
            return res.status(400).json({
                "message":"Category not found"
            })
        }

        return res.status(200).json({
            "message":"Category Deleted Successfully",
            "result":result
        })
    })
}

exports.edit = (req,res) => {
    const {id} = req.params

    db.query("SELECT * FROM categories WHERE id=?",[id],(err,result)=> {
        if(err){
            return res.status(400).json(
                {
                    "message":"Something went wrong " + err
                }
            )
        }

        if(result.affectedRows === 0){
            return res.status(400).json({
                "message":"Category not found"
            })
        }

            return res.status(200).json({
                "data":result
            })
        
    })
}

exports.update = (req,res) => {
    const {id,name,description} = req.body;
    db.query("UPDATE categories SET name=? ,description=?  WHERE id=?",[name,description,id],(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong "+ err
            })
        }

        if(result.affectedRows === 0){
            return res.status(400).json({
                "message":"Category not found"
            })
        }

        return res.status(200).json({
            "message":"Category Updated Successfully",
            "data":result
        })
    })
}