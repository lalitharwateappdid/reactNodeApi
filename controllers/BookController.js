const Book = require("../models/BookModel");

exports.get = async (req, res) => {
  try {
    const book = await Book.findAll();
    res.status(200).json({
      data: book,
      status: true,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.create = async (req, res) => {
  const { name, description, pages_in_books, price } = req.body;

  try {
    await Book.create({
      name: name,
      description: description,
      pages_in_books: pages_in_books,
      price: price,
    });
    res.status(200).json({
      message: "Book Added Successfully",
      status: true,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.destroy = async(req, res) => {
  const { id } = req.body;
  try{
        await Book.destroy({
            where:{
                id:id
            }
        })

        res.status(200).json({
          "message":"Book Deleted Successfullyhome"
        })
  }
  catch(err){
    res.status(400).json({
        "message":"Something went wrong " + err
    })
  }
};

exports.edit = async(req, res) => {
  const { id } = req.params;

  try{
    const book = await Book.findByPk(id)
    res.status(200).json({
        "data":book
    })
  }

  catch(err){
    res.status(400).json({
        "message":"Something went wrong "+ err
    });
  }
};

exports.update = async(req, res) => {
  const { id, name, description, pages_in_books, price, status } = req.body;

  try{
    const book = await Book.findByPk(id);

    if(book){
        await Book.update({
            name:name,
            description:description,
            pages_in_books:pages_in_books,
            price:price
        },{
            where:{
                id:id
            }
        })

        res.status(200).json({
          "message":"Book Updated Succesfully"
        })
    }
    else{
        res.status(400).json({
            "message":"Book not Found"
        })
    }
  }
  catch(err){
    res.status(400).json({
        "message":"Something went wrong " + err
    })
  }

};
