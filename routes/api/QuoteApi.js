    const express = require("express")
const router = express.Router();

const QuoteController = require("../../controllers/QuoteController");

router.get("/get",QuoteController.get);
router.post("/create",QuoteController.create);
router.delete("/destroy",QuoteController.destroy);
router.get("/edit/:id",QuoteController.edit);
router.put("/update",QuoteController.update);
router.put("/status",QuoteController.status);

module.exports = router;