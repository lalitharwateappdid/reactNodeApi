const db = require("../database/database");
const HomeContent = require("../models/HomeContentModel");

exports.get = async (req, res) => {
  try {
    const homecontent = await HomeContent.findAll();
    res.status(200).json({
      data: homecontent,
      status: 200,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.create = async (req, res) => {
  const { image_path, description } = req.body;
  try {
    const homecontent = await HomeContent.create({
      description: description,
      image_path: image_path,
    });

    res.status(200).json({
      message: "Home content added successfully",
      data: homecontent,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.edit = async (req, res) => {
  const { id } = req.params;

  try {
    const homecontent = await HomeContent.findByPk(id);

    res.status(200).json({
      data: homecontent,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.update = async (req, res) => {
  const { id, image_path, description } = req.body;

  try {
    const homecontent = await HomeContent.findByPk(id);

    if (homecontent) {
      await HomeContent.update(
        {
          description: description,
          image_path: image_path,
        },
        {
          where: {
            id: id,
          },
        }
      );
    } else {
        res.status(400).json({
            "message":"Home content not found"
        })
    }
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.destroy = async(req, res) => {
  const { id } = req.body;

  try{
    const homecontent = await HomeContent.findByPk(id);

    if(homecontent){
        await HomeContent.destroy({
            where:{
                id:id
            }
        })

        res.status(200).json({
            "message":"Home content Deleted Successfully"
        })
    }
    else{
        res.status(400).json({
            "message":"Home Content Not Found"
        })
    }
  }
  catch(err){
    res.status(400).json({
        "message":"Something went wrong " + err
    })
  }
  
};
