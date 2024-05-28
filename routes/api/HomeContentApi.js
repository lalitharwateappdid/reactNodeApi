const express = require("express")

const router = express.Router()

const HomeContentController = require("../../controllers/HomeContentController");
const { verifyToken } = require("../../middleware/verifyToken");

router.use(verifyToken);
router.get("/get",HomeContentController.get);
router.post("/create",HomeContentController.create);
router.get("/edit/:id",HomeContentController.edit);
router.put("/update",HomeContentController.update);
router.delete("/destroy",HomeContentController.destroy);

module.exports=router