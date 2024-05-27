const Quote = require("../models/QuoteModel");

exports.get = async (req, res) => {
    try {
        const quote = await Quote.findAll();
        res.status(200).json({
            "data": quote,
            "status": true
        })
    }
    catch (err) {
        res.status(400).json({
            "message": "Something went wrong " + err
        })
    }
}

exports.create = (req, res) => {
    const { quote } = req.body


    try {
        const quotes = Quote.create({
            quote: quote
        })

        res.status(200).json({

            "message": "Quote Added successfully"
        })
    }

    catch (err) {
        res.status(400).json({
            "message": "Something went wrong " + err
        })
    }
}

exports.destroy = async(req, res) => {
    const { id } = req.body;

    try{
        const quote = await Quote.findByPk(id);

        if(quote){
            await Quote.destroy({
                where:{
                    id:id
                }
            })

            res.status(200).json({
                "message":"Quote Deleted Successfully",
            })
        }
        else{
            res.status(400).json({
                "message":"Quote not found"
            })
        }
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}

exports.edit = async(req, res) => {
    const { id } = req.params;
    
    try{
        const quote = Quote.findByPk(id);

        res.status(200).json({
            "data":quote
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }

}


exports.update = async (req, res) => {
    const { id, quote } = req.body

    try{
        const quote = await Quote.findByPk(id);

        if(quote){
            await Quote.update({
                quote:quote
            },{
                where:{
                    id:id 
                }
            })
        }
        else{
            res.status(400).json({
                "message":"Something went wrong " + err
            })
        }
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}

