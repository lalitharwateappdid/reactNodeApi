const express = require("express")

const router = express.Router()

const HomeContentController = require("../../controllers/HomeContentController");



router.get("/get",HomeContentController.get);
router.post("/create",HomeContentController.create);
router.get("/edit/:id",HomeContentController.edit);
router.put("/update",HomeContentController.update);
router.delete("/destroy",HomeContentController.destroy);
router.put("/status",HomeContentController.status);

module.exports=router