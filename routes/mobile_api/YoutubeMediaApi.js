const express = require("express")
const router = express.Router()
const YoutubeMediaController = require("../../controllers/mobile_controller/YoutubeMediaController");

router.get("/get", YoutubeMediaController.get)

module.exports = router;