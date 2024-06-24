const db = require("../../database/database");
// const Literature
const Literature  = require("./../../models/LiteratureModel")


exports.get = async(req,res) => {
    const {id} = req.body
    try{
        const data = await Literature.findAll(
           {
            where:{
                id:id
            }
           }
        )

        res.status(200).json({
            data:data,
            "status":true
        })
    }
    catch(err){
        res.status(400).json({
            "message" :"Something went wrong " + err
        })
    }
}