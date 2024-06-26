const express = require("express")
const router = express.Router() 
const Categories = require("../../controllers/mobile_controller/CategoriesController");

router.get("/get", Categories.get)

module.exports = router
// updated