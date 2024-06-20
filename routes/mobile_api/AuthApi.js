const express = require("express");
const router = express.Router();

const AuthController = require("../../controllers/mobile_controller/auth/AuthController");

router.post("/register", AuthController.register)

module.exports = router;