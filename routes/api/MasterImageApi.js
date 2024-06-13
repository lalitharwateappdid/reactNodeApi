const express = require("express")

const router = express.Router()
require("dotenv").config()
const bodyParser = require('body-parser');

const app = express();

const path = require("path")
const cors = require('cors');
app.use(bodyParser.json());

// file upload middleware
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// settings cross access origin
const corsOptions = {
    origin: ['http://localhost:5173',"http://localhost:5173/api/uploads"], // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: [['Content-Type', 'Authorization']],
    Credential:true // Allow these headers
};
app.use(cors(corsOptions));


const MasterImage = require("../../controllers/MasterImageController")

router.post("/create",MasterImage.uploadSingleAvatar,MasterImage.create)
router.get("/get",MasterImage.get);
router.put("/status",MasterImage.status);
router.delete("/destroy",MasterImage.delete);
router.get("/export",MasterImage.excelExport);

module.exports = router