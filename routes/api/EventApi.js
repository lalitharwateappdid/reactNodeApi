const express = require("express")

const router = express.Router()

const EventController = require("../../controllers/EventController");

router.get("/get",EventController.get);
router.post("/create",EventController.create);
router.get("/edit/:id",EventController.edit);
router.put("/update",EventController.update);
router.delete("/delete",EventController.delete);



module.exports = router;