const express = require("express")

const router = express.Router()

const LiteratureController = require('../../controllers/LiteratureController');

router.get("/get", LiteratureController.get)
router.delete("/delete", LiteratureController.delete)
router.post("/create", LiteratureController.create)
router.get("/edit/:id", LiteratureController.edit)
router.put("/update", LiteratureController.update)
router.put("/status",LiteratureController.status)


module.exports = router