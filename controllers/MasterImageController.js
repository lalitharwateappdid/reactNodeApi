const multer  = require('multer');
const MasterImage = require('../models/MasterImageModel');
var data_exporter = require('json2csv').Parser;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      
      cb(null, Date.now()+file.originalname)
    }
  })
  
  const upload = multer({ storage })
// const upload = multer({ dest: 'uploads/' })


exports.create = async(req, res) => {
    console.log(req.body)
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    const filePath = req.file.path;

    const data = await MasterImage.create({
        image:filePath
    })
    res.status(200).json({
        "data":data,
        "message":"file uploaded successfully"
    })
};

// image uploading middleware
exports.uploadSingleAvatar = upload.single('image');

exports.get = async(req,res) => {
    try{
        const data = await MasterImage.findAll()

        res.status(200).json({
            "data":data,
            
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}

exports.status = async(req,res) => {
    const {id} = req.body
    try{
        const data = await MasterImage.findByPk(id)

        data.status = !data.status
        data.save();

        res.status(200).json({
            "message":"Status Updated Sucessfully"
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong "+ err 
        })
    }
}

exports.delete = async(req,res) => {
    const {id} = req.body
    try{
        await MasterImage.destroy({
            where:{
                id:id
            }
        })

        res.status(200).json({
            "message":"Image Deleted Successfully"
        })
    }   
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}

exports.excelExport = async(req,response) => {
    try{
        const data = await MasterImage.findAll();
        
        var mysql_data = JSON.parse(JSON.stringify(data));
        // defining csv header
        let header = ['id','image','status'];

        var json_data = new data_exporter({header});

        var csv_data = json_data.parse(mysql_data);

        response.setHeader("Content-Type", "text/csv");

        response.setHeader("Content-Disposition", "attachment; filename=sample_data.csv");

        response.send(csv_data)

    }

    catch(err){
        response.status(400).json({
            "message":"Something went wrong"
        })
    }
}
