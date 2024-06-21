const BusinessSettings = require("./../models/BusinessSettingModel")

exports.create = async(req,res) => {
    try{
        const requestData = req.body;

    // Iterate through each key-value pair in the request body
    for (const key in requestData) {
      if (requestData.hasOwnProperty(key)) {
        const value = requestData[key];

        // Update or create a BusinessSetting record based on 'key'
        await BusinessSettings.upsert({
          key: key,
          value: value
        });
      }
    }
}
    catch(err){
        res.status(400).json({
            "message":"Something went wrong"
        })
    }
}


exports.get = async(req,res) => {
    try{
        const data = await BusinessSettings.findAll()
        console.log(data)
        res.status(200).json({
            "data":data
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}