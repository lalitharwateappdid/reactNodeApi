const express = require("express")
const router = express.Router();
const userController = require("../../controllers/UserController");

router.get("/get/:id",userController.get);
router.post("/create",userController.create);

module.exports = router