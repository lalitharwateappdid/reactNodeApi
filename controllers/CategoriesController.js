const Category = require("../models/CategoryModel");
const multer = require("multer");
const express = require("express");
const app = express();
const Subcategory = require("../models/SubCategoryModel") 


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

exports.uploadFiles = upload.single("coverImage");



const fetchCategoriesRecursively = async (categories) => {
  if (!Array.isArray(categories)) {
    categories = [categories];
  }

  for (let category of categories) {
    // Fetch related categories recursively
    const relatedCategories = await category.getRelatedCategories();
    if (relatedCategories && relatedCategories.length > 0) {
      category.dataValues.relatedCategories = relatedCategories;
      await fetchCategoriesRecursively(relatedCategories);
    }
  }
};

exports.get = async (req, res) => {
  try {
    // Fetch top-level categories
    let categories = await Category.findAll({
      where: { parentId: null }, // Assuming top-level categories have parentId as null
      include: [
        { model: Category, as: 'relatedCategories' } // Include related categories
      ]
    });

    // Fetch related categories recursively for each top-level category
    await fetchCategoriesRecursively(categories);

    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.create = async (req, res) => {
  const { name, description } = req.body;

  try {
    const category = await Category.create({
      title: name,
      description: description,
    });

    res.status(200).json({
      message: "Category Added Successfully",
      data: category,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.body;

  try {
    const category = await Category.findByPk(id);

    if (category) {
      await Category.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({
        message: "Category Deleted Successfully",
      });
    } else {
      res.status(400).json({
        message: "Category not found",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.edit = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findByPk(id);

    if (category) {
      res.status(200).json({
        data: category,
      });
    } else {
      res.status(400).json({
        message: "Something went wrong " + err,
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.update = async (req, res) => {
  const { id, name, description } = req.body;
  const cover_image = req.file.path;

  // const cover_path = cover_image.path;
  try {
    const category = await Category.findByPk(id);
    if (category) {
      await Category.update(
        {
          title: name,
          cover_image:cover_image,
          description: description,
          // cover_image:cover_image
        },
        {
          where: {
            id: id,
          },
        }
      );

      res.status(200).json({
        "message":"Category Updated Successfully"
      })
    } else {
      res.status(400).json({
        message: "Category not found",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};


exports.status = async(req,res) => {
  const {id} = req.body

  try{
    const data = await Category.findByPk(id);

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
