const express = require("express")

const router = express.Router()

const EbookController = require("../../controllers/EbookController");

router.get("/get",EbookController.get);
router.post("/create",EbookController.create);
router.get("/edit/:id",EbookController.edit);
router.put("/update",EbookController.update);
router.delete("/delete",EbookController.delete);


module.exports = router;