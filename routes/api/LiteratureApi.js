const express = require("express")

const router = express.Router()

const LiteratureController = require('../../controllers/LiteratureController');

router.get("/get",LiteratureController.get)


module.exports = router