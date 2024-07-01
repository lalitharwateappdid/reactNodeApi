const db = require("../../database/database");
// const Literature
const Literature  = require("./../../models/LiteratureModel")
const Category = require("../../models/CategoryModel")


exports.get = async(req,res) => {
    const {id} = req.query
    try {
        const literature = await Literature.findAll({
          where: { categoryId:id }, // Filter by categoryId
          include: [
            {
              model: Category,
              
              as: 'category' // Alias for the included Category model
            }
          ]
        });
    
        if (!literature || literature.length === 0) {
          return res.status(200).json({ 
            data:[],
            message: 'No literature found for the specified category' });
        }
    
        res.json({
            "data":literature,
            "status":true
        });
      }
    catch(err){
        res.status(400).json({
            "message" :"Something went wrong " + err
        })
    }
}

exports.getRandom = async (req, res) => {
    try {
        // Fetch a random literature item
        const literature = await Literature.findOne({
            include: [
                {
                    model: Category,
                    
                    as: 'category'
                }
            ],
            order: [db.literal('RAND()')], 
          
        });

        if (!literature) {
            return res.status(404).json({ message: 'No literature found' });
        }

        res.json({
            "data":literature,
            "status":true
        });
    } catch (err) {
        console.error('Error fetching random literature:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};