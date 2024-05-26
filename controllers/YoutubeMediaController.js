const Media = require("../models/YoutubeMedia");

exports.get = async (req, res) => {
  try {
    const media = await Media.findAll();
    res.status(200).json({
      data: media,
      status: true
    })
  }
  catch (err) {
    res.status(400).json({
      error: "Error fetching data"
    });
  }
};

exports.create = async (req, res) => {
  const { title, link } = req.body;
  try {
    const newMedia = await Media.create({
      title,
      link
    });
    res.status(200).json({
      "data": newMedia,
      "message": "Media Created Successfully",
      "status": true
    })
  }
  catch (err) {
    res.status(400).json({
      "message": "Something went wrong " + err
    })
  }
};

exports.destroy = async (req, res) => {

  const { id } = req.body;

  try {
    const deleteUser = await Media.destroy({
      where: {
        id: id
      }
    })

    res.status(200).json({
      "message": "Media Deleted Successfully",
      "status": true
    })
  }
  catch (err) {
    res.status(400).json({
      "message": "Something went wrong " + err
    })
  }


};

exports.edit = async (req, res) => {
  const { id } = req.params;

  try {
    const media = await Media.findByPk(id);

    if (media) {
      res.status(200).json({
        "data": media,
        "status": true
      })
    }
    else {
      res.status(400).json({
        "message": "Media not found"
      })
    }
  }
  catch (err) {
    res.status(400).json({
      "message": "Something went wrong"
    })
  }
};


exports.update = async (req, res) => {
  const { id, title, link } = req.body

  try {
    const media = await Media.findByPk(id);
    if (media) {
      await Media.update({
        title: title,
        link: link
      },
        {
          where: {
            id: id
          }
        }
      )

      res.status(200).json({
        "message": "Media updated successfully",
        "status": true
      })
    }
    else {
      res.status(400).json({
        "message": "Media Not Found"
      })
    }
  }
  catch (err) {
    res.status(400).json({
      "message": "Something went wrong " + err
    })
  }
}
