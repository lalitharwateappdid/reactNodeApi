const db = require("../database/database");
const HomeContent = require("../models/HomeContentModel");
const multer  = require('multer')

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
exports.uploadSingleAvatar = upload.single('image_path');

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
  res.json(req.body)

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

      res.status(200).json({
        message: "Home Content Updated Successfully",
      });
    } else {
      res.status(400).json({
        message: "Home content not found",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.body;

  try {
    const homecontent = await HomeContent.findByPk(id);

    if (homecontent) {
      await HomeContent.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).json({
        message: "Home content Deleted Successfully",
      });
    } else {
      res.status(400).json({
        message: "Home Content Not Found",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};


exports.status = async (req, res) => {
  const { id } = req.body;

  try {
    const data = await HomeContent.findByPk(id);

    data.status = data.status === false ? true : false;
    await data.save();

    res.status(200).json({
      message: "Status Updated Sucessfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
    });
  }
};
