const db = require("../../database/database");
const Media = require("../../models/YoutubeMedia");

exports.get = async (req, res) => {
    try {
        const media = await Media.findAll();
        res.status(200).json({
            data: media,
            status: true
        })
    }
    catch (err) {
        res.status(400).json({
            error: "Error fetching data"
        });
    }
};