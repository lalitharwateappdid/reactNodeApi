const multer = require("multer");
const BusinessSettings = require("./../models/BusinessSettingModel")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage })

exports.uploadSingleAvatar = upload.single('image');

exports.create = async(req,res) => {
    console.log(req)
    const upsertPromises = [];
    
    try {
        let data = req.body; 

        
        if (!Array.isArray(data)) {
            data = Object.entries(data).map(([key, value]) => ({ key, value }));
        }

      
       

        data.forEach(({ key, value }) => {
            const existingRecord = BusinessSettings.findOne({ where: { key: key } });

            upsertPromises.push(
                existingRecord.then(existing => {
                    if (existing) {
                        // Update the existing record
                        return existing.update({ value: value });
                    } else {
                        // Create a new record
                        return BusinessSettings.create({ key: key, value: value });
                    }
                })
            );
        });

        await Promise.all(upsertPromises);

        res.status(200).json({
            message: "Data Updated Successfully",
            status: true
        });
    }
    

    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}


exports.get = async(req,res) => {
    try{
        const data = await BusinessSettings.findAll({
            attributes: ["key", "value"],
          });
          const keyValuePairs = {};
      
          data.forEach((instance) => {
            
          keyValuePairs[instance.key] = instance.value;
          });

        res.status(200).json({
            "data":keyValuePairs
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}