const db = require("../../database/database");
const BusinessSettings = require("../../models/BusinessSettingModel");


exports.get = async(req,res) => {
    try{
        const data = await BusinessSettings.findAll();

        res.status(200).json({
            "data":data,
            "status":true
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Error Fetching Data " + err,
            "status":false
        })
    }
}