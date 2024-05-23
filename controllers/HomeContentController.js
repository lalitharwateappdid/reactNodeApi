const db = require("../database/database");

exports.get = (req,res) => {
    db.query("SELECT * FROM home_contents",(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong " + err
            })
        }

        return res.status(200).json({
            "data":result
        })

    })
}

exports.create = (req,res) => {
    const {image_path,description} = req.body

    db.query("INSERT INTO home_contents(image_path,description) VALUES(?,?)",[image_path,description],(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong "+err
            })
        }

        return res.status(200).json({
            "message":"Data Added Successfully",
            "data":result
        })
    })
}

exports.edit = (req,res) => {
    const {id} = req.params

    db.query("SELECT * FROM home_contents WHERE id=?",[id],(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong "+err
            });
        }
        
        return res.status(200).json({
            "data":result
        })
    })
}

exports.update = (req,res) => {
    const {id,image_path,description} = req.body

    db.query("UPDATE home_contents SET image_path=?, description=? WHERE id=?",[image_path,description,id],(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong " + err
            })
        }

        return res.status(200).json({
            "message":"Data Updated Successfully",
            "data":result
        })
    })
}

exports.destroy = (req,res) => {
    const {id} = req.body

    db.query("DELETE FROM home_contents WHERE id=?",[id],(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong " + err
            })
        }

        return res.status(200).json({
            "message":"Data deleted successfully"
        })
    })
}

