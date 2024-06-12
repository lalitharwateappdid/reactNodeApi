const MasterImage = require("../models/MasterImageModel")
const multer = require("multer")



const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + '-' +Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage:storage}).single('image');

exports.create = (req,res) => {
    // const {image} = req.files
    console.log(req.files)
    
    upload(req,res,async function(err){
        if (err) {
            return res.status(500).send(err);
        }

        // Save the file path to the database
        const imagePath = req.file.path;
        try {
            const image = await Image.create({ path: imagePath });
            res.send('File uploaded successfully and path saved to database.');
        } catch (error) {
            res.status(500).send(error.message);
        }
    })
}