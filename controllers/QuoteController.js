const Quote = require("../models/QuoteModel");

exports.get = async (req, res) => {
  try {
    const quote = await Quote.findAll();
    res.status(200).json({
      data: quote,
      status: true,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.create = (req, res) => {
  const { quote, day_of_year, year } = req.body;

  try {
    const quotes = Quote.create({
      quote: quote,
      day_of_year: day_of_year,
      year: year,
    });

    res.status(200).json({
      message: "Quote Added successfully",
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
    const quote = await Quote.findByPk(id);

    if (quote) {
      await Quote.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).json({
        message: "Quote Deleted Successfully",
      });
    } else {
      res.status(400).json({
        message: "Quote not found",
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
    const quote = await Quote.findByPk(id);
    console.log(quote);

    res.status(200).json({
      data: quote,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong " + err,
    });
  }
};

exports.update = async (req, res) => {
  const { id, quote,year,day_of_year } = req.body;

  try {
    const quoteupdate = await Quote.findByPk(id);

    if (quoteupdate) {
      await Quote.update(
        {
          quote: quote,
          year:year,
          day_of_year:day_of_year
        },
        {
          where: {
            id: quoteupdate.id,
          },
        }
      );

      res.status(200).json({
        quote: quoteupdate,
        message: "Quote Updated Successfully",
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

exports.status = async (req, res) => {
  const { id } = req.body;

  try {
    const data = await Quote.findByPk(id);

    data.status = data.status === false ? true : false;
    await data.save();

    res.status(200).json({
      message: "Status Updated Sucessfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
    });
  }
};
