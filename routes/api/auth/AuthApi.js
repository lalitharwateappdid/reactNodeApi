const express = require("express");
const router = express.Router();

const AuthController = require("../../../controllers/auth/AuthenticationController");

router.post("/login",AuthController.login)

module.exports = router;