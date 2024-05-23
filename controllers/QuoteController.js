const db = require("../database/database");

exports.get = (req,res) => {
    db.query("SELECT * FROM quotes ORDER BY id DESC",(err,result)=>{
        if(err){
            return res.status(400).json({ message: 'Something went wrong', status: false });
        }

        return res.status(200).json({
            data:result
        })
    });
}

exports.create = (req,res) => {
    const {quote} = req.body

    db.query("INSERT INTO quotes(quote) VALUES(?)",[quote],(err,result)=> {
        if(err){
            return res.status(400).json({
                "message":"Something went wrong" + err
            })
        }

        return res.status(200).json({
            "message":"Quote Added Successfully",

        })
    })
}

exports.destroy = (req,res)=> {
    const {id} = req.body;

    db.query("DELETE  FROM quotes WHERE id=?",[id],(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong " +err,
                "status":false
            })
        }

        return res.status(200).json({
            "message":"Quote deleted successfully",
            "status":true
        })
    })
}

exports.edit = (req,res) => {
    const {id} = req.params;
    db.query("SELECT * FROM quotes WHERE id=?",[id],(err,result)=>{
        if(err){
            return res.status(200).json({
                "message":"Something went wrong " + err
            })
        }

        return res.status(200).json({
            "data":result
        })
    })

}


exports.update = (req,res) => {
    const {id,quote} = req.body

    db.query("UPDATE quotes SET quote=? WHERE id=?",[quote,id],(err,result)=>{
        if(err){
            return res.status(400).json({
                "message":"Something went wrong "+err
            })
        }

        return res.status(200).json({
            "data":result,
            "message":"Data Updated Successfully"
        })
    })
}

