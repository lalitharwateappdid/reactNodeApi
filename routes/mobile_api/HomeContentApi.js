const express = require("express")
const router = express.Router()
const HomeContentController = require("../../controllers/mobile_controller/HomeContentController");

router.get("/get", HomeContentController.get)

module.exports = router;