const Event = require("../models/EventModel");

exports.get = async(req,res) => {
    try{
        const event = await Event.findAll();
        res.status(200).json({
            "data": event,
            "status" : true
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}

exports.create = async(req,res) => {
    const {event_name, event_date,day} = req.body
    try{
        const event = Event.create({
            event_name:event_name,
            event_date:event_date,
            day:day
        })

        res.status(200).json({
            "message":"Event Added Successfully",
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong "+ err
        })
    }
}

exports.edit = async(req,res) => {
    const {id} = req.params;

    try{
        const event = await Event.findByPk(id);

        res.status(200).status({
            "message":"Data retrieved successfully",
            "data":event
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}

exports.update = async(req,res) => {

    const {id,event_date,event_name,day} = req.body

    try{
        await Event.update({
           event_date:event_date,
            event_name:event_name,
            day:day, 
        },{
            where:{
                id:id
            }
        })

        res.status(200).json({
           "message":"Event Updated Successfully"
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}

exports.delete  = async(req,res) => {
    const {id} = req.body
    try{
        const event = await Event.findByPk(id);
        if(event){
            await Event.destroy({
                where:{
                    id:id
                }
            })
            
            res.status(200).json({
                "message":"Event Deleted Successfully"
            })
        }
        else{
            res.status(400).json({
                "message":"Event Not Found"
            })
        }
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}