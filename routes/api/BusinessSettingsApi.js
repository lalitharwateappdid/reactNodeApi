const express = require("express")

const router = express.Router()

const BusinessSettingsController = require("../../controllers/BusinessSettingsController");

router.get("/get",BusinessSettingsController.get);


module.exports=router