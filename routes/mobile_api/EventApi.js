const express = require("express")
const router = express.Router()
const EventController = require("../../controllers/mobile_controller/EventController");

router.get("/get", EventController.get)

module.exports = router;