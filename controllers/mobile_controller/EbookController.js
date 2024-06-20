const db = require("../../database/database");
const Ebook = require("../../models/EbookModel");


exports.get = async (req, res) => {
    try {
        const data = await Ebook.findAll()

        res.status(200).json({
            "data": data,
            "status": true
        })
    }
    catch (err) {
        res.status(400).json({
            "message": "Error Fetching Data"
        })
    }
}