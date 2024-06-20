const express = require("express")
const router = express.Router()
const EbookController = require("../../controllers/mobile_controller/EbookController");

router.get("/get", EbookController.get)

module.exports = router;