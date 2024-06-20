const db = require("../../database/database");
const Event = require("../../models/EventModel");

exports.get = async (req, res) => {
    try {
        const data = await Event.findAll()

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