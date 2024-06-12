const { Image } = require('../models/MasterImageModel');

const express = require('express')
const multer  = require('multer');
const MasterImage = require('../models/MasterImageModel');

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

const app = express()

exports.create = async(req, res) => {
    const filePath = req.file.path;

    const data = await MasterImage.create({
        image:filePath
    })
    res.status(200).json({
        "data":data,
        "message":"file uploaded successfully"
    })
};

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
