const Ebook = require("../models/EbookModel");
const fileUpload = require("express-fileupload");
const express = require("express");
const app = express();
app.use(fileUpload())
app.use(express.static('public'));

exports.get = async(req,res) => {
    try{
        const event = await Ebook.findAll()

        res.status(200).json({
            "data":event,
            "status":true
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}

exports.create = async(req,res) => {
    const {name,description,authorName,pdfPath,coverPath} = req.body;
   

    try{
        
        const ebook = await Ebook.create({
            name:name,
            description:description,
            authorName:authorName,
            coverPath:coverPath,   
            pdfPath:pdfPath
        })

        res.status(200).json({
            "data":ebook,
            "message":"Ebook Added Successfully"
        })
    }
    catch(err){
        res.status(200).json({
            "message":"Something went wrong " + err
        })
    }
}

exports.edit = async(req,res) => {
    const {id} = req.params
    

    try{
        const ebook = await Ebook.findByPk(id);
        
        if(ebook){
            res.status(200).json({
                "data":ebook,
                "status":true
            })
        }
        else{
            res.status(200).json({
                "message":"Ebook not found"
            })
        }
    }
    catch(err){
        res.status(200).json({
            "message":"Something went wrong " + err
        })
    }
}

exports.update = async(req,res) => {
    const {id,name,description,authorName,coverPath,pdfPath} = req.body
    try{
        await Ebook.update({
            name:name,
            description: description,
            authorName: authorName,
            coverPath: coverPath,
            pdfPath: pdfPath
        },{
            where:{
                id:id
            }
        })

        res.status(200).json({
            
            "message":"Ebook Updated Successfully"
        })
    }   
    catch(err){
        res.status(200).json({
            "message":"Something went wrong " + err
        })
    }
}


exports.delete = async(req,res) => {
    const {id} = req.body;
    try{
        const ebook = await Ebook.findByPk(id);

        if(ebook){
                await Ebook.destroy({
                    where:{
                        id:id
                    }
                })
            res.status(200).json({
                "message":"Ebook Deleted Successfully"
            })
        }
        else{
            res.status(400).json({
                "message":"Ebook not Found"
            })
        }
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
        const data = await Ebook.findByPk(id);

        data.status = data.status === false ? true : false;
        await data.save();

        res.status(200).json({
            "message":"Status Updated Sucessfully",
            data:data
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}