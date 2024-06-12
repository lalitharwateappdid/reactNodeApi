const express = require("express")

const router = express.Router()


const MasterImage = require("../../controllers/MasterImageController")

router.post("/create",MasterImage.uploadSingleAvatar,MasterImage.create)
router.get("/get",MasterImage.get);
router.put("/status",MasterImage.status);
router.delete("/destroy",MasterImage.delete);

module.exports = router