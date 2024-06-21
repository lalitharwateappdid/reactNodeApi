const express = require("express")
const router = express.Router()
const SubCategoriesController = require("../../controllers/mobile_controller/SubCategoriesController");



router.get("/get", SubCategoriesController.get)

module.exports = router;