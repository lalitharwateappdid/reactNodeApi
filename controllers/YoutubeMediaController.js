const db = require("../database/database");

exports.get = (req, res) => {
  db.query("SELECT * FROM youtube_media", (err, result) => {
    if (err) {
      return res.status(400).json({
        message: "something went wrong",
      });
    }
    return res.status(200).json({
      data: result,
    });
  });
};

exports.create = (req, res) => {
  const { title, link } = req.body;

  db.query(
    "INSERT INTO youtube_media (title,link)  VALUES(?,?)",
    [title, link],
    (err, result) => {
      if (err) {
        return res.status(400).json({
          message: `Something went wrong ${err}`,
        });
      }

      return res.status(200).json({
        message: "Data added successfully",
        data: result,
      });
    }
  );
};

exports.destroy  = (req, res) => {
    // console.log(req.body);
    const { id } = req.body;

    
    if (!id) {
        return res.status(400).json({ message: 'Media ID is required', status: false });
    }

 
    db.query('DELETE FROM youtube_media WHERE id=?', [id], (err, results) => {
        if (err) {
            console.error('Error deleting media:', err);
            return res.status(500).json({ message: 'Something went wrong', status: false });
        }
        res.status(200).json({ message: 'Media deleted', status: true });
    });
};

exports.edit = (req, res) => {
    const { id } = req.params;
    // console.log(req.params);

    if (!id) {
        return res.status(400).json({
            message: "ID is required",
            status: false
        });
    }

    db.query("SELECT * FROM youtube_media WHERE id=?", [id], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({
                message: "Something went wrong while fetching media data",
                status: false
            });
        }
        return res.status(200).json({
            data: result
        });
    });
};


exports.update = (req,res) => {
    const {id,title,link} = req.body

    db.query("UPDATE youtube_media SET title=?, link=? WHERE id=?",[title,link,id],(err,result)=>{
        if(err){
            return res.status(400).json({
                message:"Something went wrong"
            })
        }

        return res.status(200).json({
            message:"Media Updated successfully",
            data:result
        })
    })
}
