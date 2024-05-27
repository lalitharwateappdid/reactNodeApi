const User = require("../models/UserModel");


exports.create = async(req,res) => {
    const {name,password,email} = req.body;
    try{
        await User.create({
            name:name,
            password:password,
            email:email
        })

        res.status(200).json({
            "message":"User Created successfully"
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}

exports.get = async(req,res) => {
    const {id} = req.params

    try{
        const user = await User.findByPk(id);
        if(user){
            res.status(200).json({
                "data":user,
                "status" : true
            })
        }
        else{
            res.status(400).json({
                "message":"User not found"
            })
        }
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}