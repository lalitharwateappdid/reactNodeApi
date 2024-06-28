const express = require("express")

const router = express.Router()
const LiteratureController = require("../../controllers/mobile_controller/LiteratureController")

router.get("/get", LiteratureController.get)
router.get("/get-random",LiteratureController.getRandom)


module.exports = router