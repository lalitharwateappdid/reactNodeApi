const db = require("../../database/database");
const Quote = require("../../models/QuoteModel");
const { Op } = require('sequelize');

return Quote

exports.get = async (req, res) => {
    
    
    try {
        const data = await Quote.findOne({
            where:{
                date:Date.now()
            }
        })


        res.status(200).json({
            "data": data,
            "status": true
        })
    }
    catch (err) {
        res.status(400).json({
            "message": "Error fetching data"
        })
    }
}