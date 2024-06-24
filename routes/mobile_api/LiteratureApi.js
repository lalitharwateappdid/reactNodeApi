const express = require("express")

const router = express.Router()
const LiteratureController = require('../../controllers/mobile_controller/LiteratureController');

router.get("/get", LiteratureController.get)


module.exports = router