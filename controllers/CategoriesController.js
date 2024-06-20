const Category = require("../models/CategoryModel");

exports.get = async (req, res) => {
  try {
    const category = await Category.findAll({
      order:[['id','DESC']]
  });
    res.status(200).json({
      data: category,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.create = async (req, res) => {
  const { name, description } = req.body;

  try {
    const category = await Category.create({
      name: name,
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
  try {
    const category = await Category.findByPk(id);
    if (category) {
      await Category.update(
        {
          name: name,
          description: description,
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
