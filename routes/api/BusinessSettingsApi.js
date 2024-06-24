const express = require("express")

const router = express.Router()

const BusinessSettingsController = require("../../controllers/BusinessSettingsController");

router.get("/get",BusinessSettingsController.get);
router.post("/create",BusinessSettingsController.uploadSingleAvatar,BusinessSettingsController.create);


module.exports=router