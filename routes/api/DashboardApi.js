const express = require("express");
const router = express.Router();


const DashboardController = require("../../controllers/DashboardController");

router.get("/get",DashboardController.get)


module.exports = router;