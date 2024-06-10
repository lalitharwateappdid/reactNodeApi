const Literature = require("../models/LiteratureModel");


exports.get = async(req,res) => {
    try{
        const data = await Literature.findAll();
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        res.status(200).json({
            "data":data,
            "status":200
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}


