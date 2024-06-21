const express = require("express")

const router = express.Router()
require("dotenv").config()
const bodyParser = require('body-parser');

const app = express();

const path = require("path")
const cors = require('cors');
app.use(bodyParser.json());

// file upload middleware
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

// settings cross access origin



const MasterImage = require("../../controllers/MasterImageController")

router.post("/create", MasterImage.uploadSingleAvatar, MasterImage.create)
router.put("/update", MasterImage.uploadSingleAvatar, MasterImage.update)
router.get("/get", MasterImage.get);
router.put("/status", MasterImage.status);
router.delete("/destroy", MasterImage.delete);
router.get("/export", MasterImage.excelExport);

module.exports = router