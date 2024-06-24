const db = require("../../database/database");
const Event = require("../../models/EventModel");
const { Op } = require('sequelize');

exports.get = async (req, res) => {
   
    try {
        const data = await Event.findAll({
            // where:{
            //     status:true,
            //     event_date:{
            //         [Op.gte]:Date.now()
            //     }
            // },
            order:[['event_date','ASC']]
        })

        res.status(200).json({
            "data": data,
            "status": true
        })
    }
    catch (err) {
        res.status(400).json({
            "message": "Error Fetching Data" + err
        })
    }
}