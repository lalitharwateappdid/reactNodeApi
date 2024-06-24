const db = require("../../database/database");
const HomeContent = require("../../models/HomeContentModel"); 


exports.get = async (req, res) => {
    try {
        const homecontent = await HomeContent.findAll();
        res.status(200).json({
            data: homecontent,
            "message": "Banner Retrieved Sucessfully",
            status: 200,
        });
    } catch (err) {
        res.status(400).json({
            message: "Something went wrong " + err,
        });
    }
};