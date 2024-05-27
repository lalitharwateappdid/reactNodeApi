const Ebook = require("../models/EbookModel");

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
    const {name,description,author_name,cover_path,pdf_path} = req.body
    
    try{
        const ebook = await Ebook.create({
            name:name,
            description:description,
            authorName:author_name,
            coverPath:cover_path,
            pdfPath:pdf_path
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
    const {id,name,description,author_name,cover_path,pdf_path} = req.body
    try{
        await Ebook.update({
            name:name,
            description: description,
            authorName: author_name,
            coverPath: cover_path,
            pdfPath: pdf_path
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