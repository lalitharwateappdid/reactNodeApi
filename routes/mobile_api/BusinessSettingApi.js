const express = require("express");
const router = express.Router();

const BusinessSettingsController = require("../../controllers/mobile_controller/BusinessSettingController");

router.get("/get", BusinessSettingsController.get)

module.exports = router;