const db = require("../../database/database");
const Quote = require("../../models/QuoteModel");
const { Op } = require('sequelize');



exports.get = async (req, res) => {
<<<<<<< HEAD

=======
    
>>>>>>> 730228236e965f40a1cbd6eab4c6980f298f62b4
    
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