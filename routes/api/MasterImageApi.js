const express = require("express")

const router = express.Router()


const MasterImage = require("../../controllers/MasterImageController")

router.post("/create",MasterImage.create)

module.exports = router