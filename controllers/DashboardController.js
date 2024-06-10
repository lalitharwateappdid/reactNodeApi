const Ebook = require("../models/EbookModel");
const Quote = require("../models/QuoteModel");
const Book = require("../models/BookModel");
const Media = require("../models/YoutubeMedia");
const slider = require("../models/HomeContentModel");
const categories = require("../models/CategoryModel");
const subCategory = require("../models/SubCategoryModel");
const Event = require("../models/EventModel");



exports.get = async(req,res) => {
    try{
        const ebook = await Ebook.count();
        const quote = await Quote.count();
        const book = await Book.count();
        const media = await Media.count();
        const category = await categories.count();
        const subcategory = await subCategory.count();
        const event = await Event.count();



        const count_object = {
            ebook:ebook,
            quote:quote,
            book:book,
            media:media,
            slider:slider,
            category:category,
            subCategory:subcategory,
            event:event
        }
    

        res.status(200).json({
            "data":count_object,
            "status":true
        })
    }
    catch(err){
        res.status(400).json({
            "message":"Something went wrong " + err
        })
    }
}

