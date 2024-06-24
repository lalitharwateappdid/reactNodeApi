const db = require("../../database/database");
const BusinessSettings = require("../../models/BusinessSettingModel");

exports.get = async (req, res) => {
  try {
    const data = await BusinessSettings.findAll({
      attributes: ["key", "value"],
    });
    const keyValuePairs = {};

    data.forEach((instance) => {
      
    keyValuePairs[instance.key] = instance.value;
    });
    
    res.status(200).json({
      data: keyValuePairs,
      status: true,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error Fetching Data " + err,
      status: false,
    });
  }
};
