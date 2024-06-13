const Literature = require("../models/LiteratureModel");
const Category = require("../models/CategoryModel");
const SubCategory = require("../models/SubCategoryModel");
exports.get = async (req, res) => {
  try {
    const data = await Literature.findAll();
    res.status(200).json({
      data: data,
      status: 200,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.literatureGet = async(req,res) => {
  const {id} = req.body
  

  try{
    
  //     const data = await Literature.findAll({
  //           where:{
  //             id:id
  //           },
  //           include:{
  //             model: [Category],
  //           }
        
  // });

  const data = await Literature.findAll({
    include:[{
      model:Category,
      
    }]
  })

  const data2 = await Category.findAll({
    include:[{
      model:Literature,
    }]
  })

    res.status(200).json({
      data:data,
      data2:data2
    })
  }
  catch(err){
    res.status(400).json({
      "message":"Something went wrong " + err
    })
  }
}

exports.delete = async (req, res) => {
  const { id } = req.body;

  try {
    const data = await Literature.findByPk(id);

    if (data) {
      await Literature.destroy({
        where: {
          id: id,
        },
      });
    }

    res.status(200).json({
      message: "Literature Deleted Successfully",
      status: true,
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
    const data = await Literature.findByPk(id);

    if (data) {
      res.status(200).json({
        data: data,
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.create = async (req, res) => {
  const {
    category_id,
    sub_category_id,
    literature_english,
    literature_marathi,
    literature_description_english,
    literature_description_marathi,
    author_name,
    author_name_marathi,
    author_name_english,
    saint_name_english,
    saint_name_marathi,
    literature_content,
    audio_file_path,
  } = req.body;

  try {
    const data = await Literature.create({
      category_id: category_id,
      sub_category_id: sub_category_id,
      literature_english: literature_english,
      literature_marathi: literature_marathi,
      literature_description_english: literature_description_english,
      literature_description_marathi: literature_description_marathi,
      author_name: author_name,
      author_name_english: author_name_english,
      author_name_marathi: author_name_marathi,
      saint_name_english: saint_name_english,
      saint_name_marathi: saint_name_marathi,
      literature_content: literature_content,
      audio_file_path: audio_file_path,
    });

    res.status(200).json({
      data: data,
      message: "Literature Added Successfully",
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.update = async (req, res) => {
  const {
    category_id,
    sub_category_id,
    literature_english,
    literature_marathi,
    literature_description_english,
    literature_description_marathi,
    author_name,
    author_name_marathi,
    author_name_english,
    saint_name_english,
    saint_name_marathi,
    literature_content,
    audio_file_path,
    id,
  } = req.body;

  try {
    const data = await Literature.findByPk(id);

    if (data) {
      await Literature.update(
        {
          category_id: category_id,
          sub_category_id: sub_category_id,
          literature_english: literature_english,
          literature_marathi: literature_marathi,
          literature_description_english: literature_description_english,
          literature_description_marathi: literature_description_marathi,
          author_name: author_name,
          author_name_english: author_name_english,
          author_name_marathi: author_name_marathi,
          saint_name_english: saint_name_english,
          saint_name_marathi: saint_name_marathi,
          literature_content: literature_content,
          audio_file_path: audio_file_path,
        },
        {
          where: {
            id: id,
          },
        }
      );

      res.status(200).json({
        message: "Literature Updated Successfully",
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
    const data = Literature.findByPk(id);
    data.status = data.status === false ? true : false;
    data.save();
    res.status(200).json({
        "message":"Status Updated Sucessfully"
    })

  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};
