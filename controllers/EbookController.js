const Ebook = require("../models/EbookModel");
const multer = require("multer");
const express = require("express");
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

exports.uploadFiles = upload.fields([
    { name: 'coverPath', maxCount: 1 },
    { name: 'pdfPath', maxCount: 1 }
  ]);

exports.get = async (req, res) => {
  try {
    const event = await Ebook.findAll();

    res.status(200).json({
      data: event,
      status: true,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.create = async (req, res) => {
  // console.log(req.body)
console.log(req.files);
  try {
      const { name, description, authorName } = req.body;
    const imageFile = req.files.coverPath[0];
    const pdfFile = req.files.pdfPath[0];

    const image_path = imageFile.path;
    const pdf_path = pdfFile.path;
    const ebook = await Ebook.create({
      coverPath: image_path,
      pdfPath: pdf_path,
      authorName: authorName,
      description: description,
      name: name,
    });

    res.status(200).json({
      data: ebook,
      message: "Ebook Added Successfully",
    });
  } catch (err) {
    res.status(200).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.edit = async (req, res) => {
  const { id } = req.params;

  try {
    const ebook = await Ebook.findByPk(id);

    if (ebook) {
      res.status(200).json({
        data: ebook,
        status: true,
      });
    } else {
      res.status(200).json({
        message: "Ebook not found",
      });
    }
  } catch (err) {
    res.status(200).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.update = async (req, res) => {
  const { id, name, description, authorName, coverPath, pdfPath } = req.body;
  try {
    await Ebook.update(
      {
        name: name,
        description: description,
        authorName: authorName,
        coverPath: coverPath,
        pdfPath: pdfPath,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).json({
      message: "Ebook Updated Successfully",
    });
  } catch (err) {
    res.status(200).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.body;
  try {
    const ebook = await Ebook.findByPk(id);

    if (ebook) {
      await Ebook.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({
        message: "Ebook Deleted Successfully",
      });
    } else {
      res.status(400).json({
        message: "Ebook not Found",
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
    const data = await Ebook.findByPk(id);

    data.status = data.status === false ? true : false;
    await data.save();

    res.status(200).json({
      message: "Status Updated Sucessfully",
      data: data,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};
