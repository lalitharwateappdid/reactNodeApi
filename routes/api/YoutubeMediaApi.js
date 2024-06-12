const express = require("express")
const router = express.Router();
const YoutubeMediaController = require("../../controllers/YoutubeMediaController");

router.get('/get',YoutubeMediaController.get);
router.post("/create",YoutubeMediaController.create);
router.delete("/destroy",YoutubeMediaController.destroy);
router.get("/edit/:id",YoutubeMediaController.edit);
router.put("/update",YoutubeMediaController.update);
router.put("/status",YoutubeMediaController.status);

module.exports = router;