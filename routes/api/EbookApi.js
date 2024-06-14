const express = require("express")

const router = express.Router()

const EbookController = require("../../controllers/EbookController");
const Ebook = require("../../models/EbookModel");

router.get("/get",EbookController.get);
router.post("/create",EbookController.uploadFiles,EbookController.create);
router.get("/edit/:id",EbookController.edit);
router.put("/update",EbookController.update);
router.delete("/delete",EbookController.delete);
router.put("/status",EbookController.status)


module.exports = router;