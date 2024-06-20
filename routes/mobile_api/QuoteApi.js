const express = require("express")
const router = express.Router()
const QuoteController = require("../../controllers/mobile_controller/QuoteController");

router.get("/get", QuoteController.get)

module.exports = router;